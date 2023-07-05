import React from 'react';
import { View,Text } from 'react-native';

const Calculate = ({ route }) => {
    const  selectedValue  = route.params.AJCCDiseaseId;
    return (
        <View>
        <Text>{selectedValue}</Text>
     </View>
    );
  };

  export default Calculate;
  