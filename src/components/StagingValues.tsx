import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import StagingValueRow from './StagingValueRow';

const StagingValues = ({ route }) => {
  const selectedValue = route.params.AJCCDiseaseId;
  const [stagingData, setStagingData] = useState(null);
  const [items, setItems] = useState([
    { label: 'loading', value: '....' },
  ]);

  useEffect(() => {
    fetch(`https://dan1423-001-site1.btempurl.com/tnmstaging/staging-data-items-v2/${selectedValue}/1`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
      {stagingData ==null ? <StagingValueRow /> : stagingData.map((item, index) => (
          <StagingValueRow key={index} prop={item} />
        ))}

    </View>
  );
};

export default StagingValues;

