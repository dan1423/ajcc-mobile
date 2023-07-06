import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StagingValueRow = ({ prop = null,handleStagingCriteriaSelect }) => {

  const [dropdownValue, setDropdownValue] = useState(null);
  const [dropdownLabel, setDropdownLabel] = useState(null);

  const handleValueChange = (itemValue,index) => {

    setDropdownValue(itemValue);
    setDropdownLabel(prop.ValueDescList[index].Descr);  
    let obj = {ColumnName:prop.ColumnName,ValidValue:itemValue};
    handleStagingCriteriaSelect(obj);
  }
 

  return (
    <View style={styles.container}>
      <View style={[styles.column, { flex: 1 }]}>
        <Text>{prop == null ? '' : prop.ColumnTitle}</Text>
      </View>
      <View style={[styles.column, { flex: 3.5 }]}>
        <View style={styles.DropdownPickerView}>
          <Picker
            style={styles.picker}
            itemStyle={styles.dropdownItem}
            selectedValue={dropdownValue==null ? '...' : dropdownValue}
            onValueChange={(itemValue, itemIndex) => handleValueChange(itemValue,itemIndex)}
            
          >
            {prop == null ? (
              <Picker.Item label="loading..." value="..." />
            ) : (
              prop.ValueDescList.map((item, index) => (
                <Picker.Item label={item.Descr} value={item.ValidValue} key={index} />
              ))
            )}
          </Picker>
        </View>
        <View style={[styles.row, styles.selectedRow]}>
          <Text style={[{overflow:'auto'},{paddingRight:5,paddingLeft:5}]}>{dropdownLabel==null ? 'select criteria from dropdown above' : dropdownLabel}</Text>
        </View>
      </View>
      <View style={[styles.column, { flex: .5 },{paddingRight:10},{paddingLeft:10}]}>
        <Text>{dropdownValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  DropdownPickerView:{
    width: '100%'
  },
  
  selectedRow: {
    backgroundColor: '#e6f3ff',
  },
  picker: {
    width: '100%',
    backgroundColor: '#fafafa',
    flexWrap: 'wrap',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
});

export default StagingValueRow;
