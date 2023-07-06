import React,{useState,useEffect } from 'react'
import { Text } from 'react-native'

export const StagingResult = (prop) => {

  return (
    <Text>{prop==null?'Staging Result':prop.calculatedStage}</Text>
  )
}
