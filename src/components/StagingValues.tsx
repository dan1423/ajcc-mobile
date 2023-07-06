import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StagingValueRow from './StagingValueRow';
import { StagingResult } from './StagingResult';
import Calculate from './Calculate';

const StagingValues = ({ route }) => {
  const BASE_URL = 'https://dan1423-001-site1.btempurl.com';
  const selectedValue = route.params.AJCCDiseaseId;
  const [stagingData, setStagingData] = useState(null);
  const [items, setItems] = useState([{ label: 'loading', value: '....' },]);
  const [listOfStagingValues, setListOfStagingValues] = useState([]);
  const [calculatedStage, setCalculatedStage] = useState('...');

  const stagingUrl = encodeURI(`${BASE_URL}/tnmstaging/calculate?diseaseId=${selectedValue}&stagingTypeId=1`);

  const handleStagingCriteriaSelect = (obj) => {

    const updateList = (list = [], updatedObject) => {
      const index = list.findIndex(item => item.ColumnName === updatedObject.ColumnName);

      if (index !== -1) {
        list.splice(index, 1, updatedObject);
      } else {
        list.push(updatedObject);
      }

      return list;
    }


    let list = listOfStagingValues;
    list = updateList(list, obj);
    setListOfStagingValues(list);

    let partialUrl = stagingUrl;
    list.forEach((item, index) => {

      partialUrl += `&${item.ColumnName}=${item.ValidValue}`;
    });




    fetch(partialUrl)
      .then(response => response.json())
      .then(data => {
        if (data.includes('The given data does not a produce a stage')) {
         setCalculatedStage('...');
         return;
        }
        setCalculatedStage(data);
        //console.log(data);
      })
      .catch(error => {
        console.error('Error fetching dropdown data:', error);
      });


  };

  useEffect(() => {
    fetch(`https://dan1423-001-site1.btempurl.com/tnmstaging/staging-data-items-v2/${selectedValue}/1`)
      .then(response => response.json())
      .then(data => {
        setStagingData(data);
        setItems(data.map((
          item: { ColumnTitle: any; ColumnName: any; }, index: number) => ({ label: item.ColumnTitle, value: item.ColumnName })));
      })
      .catch(error => {
        console.error('Error fetching dropdown data:', error);
      });
  }, []);
  return (

    <View>
      <View style={[styles.column, { flex: 1,marginTop:5,marginBottom:10 }]}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.text, { marginRight: 2 }]}>Staging Result:</Text>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{calculatedStage == null ? '...' : calculatedStage}</Text>
        </View>
      </View>


      <View style={[{margin:20}]}>
        {stagingData == null ? <StagingValueRow /> : stagingData.map((item, index) => (
          <StagingValueRow key={index} prop={item} handleStagingCriteriaSelect={handleStagingCriteriaSelect} />
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, // Change the desired font size here
  },
});

export default StagingValues;

