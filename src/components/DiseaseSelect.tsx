import React,{useState,useEffect } from 'react';
import { View,Text,Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const DiseaseSelect = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] =  useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

    useEffect(() => {
        fetch('https://dan1423-001-site1.btempurl.com/tnmstaging/diseases')
          .then(response => response.json())
          .then(data => {
            setItems(data.map(item => ({ label: item.AJCCDiseaseId, value: item.DiseaseTitle })));
        
          })
          .catch(error => {
            console.error('Error fetching dropdown data:', error);
          });
      }, []);

      
    return (
        <View>
     
     <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={(value) => {
        navigation.navigate('StagingValues', { AJCCDiseaseId: value.label, DiseaseTitle:value.value })
      }}
    />
    </View>
      );
  };

  export default DiseaseSelect;
  
//   return (
//     <View>
//   <Text>Select a disease site:</Text>
//   <RNPickerSelect
//     onValueChange={value => navigation.navigate('Calculate', { disease: value })}
//     items={dropdownData.map(item => ({ label: item.id, value: item.value }))}
//   />
// </View>
//   );
// };
