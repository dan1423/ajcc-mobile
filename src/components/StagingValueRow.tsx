import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

const StagingValueRow = ({ prop=null}) => {
    const [open, setOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'loading...', value: '' },
      
    ]);

    useEffect(() => {
        if (prop != null) {
          setItems(
            prop.ValueDescList.map((item,index) => ({
              label: item.Descr,
              value: item.ValidValue,
              key:index
            }))
          );
        }
      }, [prop]);
   
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text>{prop==null?"":prop.ColumnTitle}</Text>
            </View>
            <View style={[styles.column, styles.middleColumn]}>
                <View style={styles.row}>
                    <DropDownPicker
                        open={open}
                        value={dropdownValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setDropdownValue}
                        setItems={setItems}
                        itemKey='label' 

                        // containerStyle={styles.dropdownContainer}
                        // style={styles.dropdown}
                       
                     
                    //      onSelectItem={(value) => {
                    // }}
                    />
                </View>
                {/* <View style={styles.row}>
                    <Text>Row 2</Text>
                </View> */}
            </View>
            <View style={styles.column}>
                <Text>{dropdownValue}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    middleColumn: {
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    row: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    
    },
    selectedRow: {
      backgroundColor: '#e6f3ff',
    },
    dropdownContainer: {
      width: '80%',
      height: 40,
    },
    dropdown: {
      backgroundColor: '#fafafa',
    },
    dropdownItem: {
      justifyContent: 'flex-start',
    },
    dropdownMenu: {
      marginTop: 40,
      backgroundColor: '#fafafa',
    },
  });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//     },
//     column: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//     },
//     middleColumn: {
//         borderLeftWidth: 0,
//         borderRightWidth: 0,
//     },
//     row: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//     },
// });

export default StagingValueRow;
