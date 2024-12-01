
import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './screenheader.style';

type ScreenHeaderBtnProps = {
  iconUrl: any;
  dimension: string;
  handlePress?: () => void;
}

export default function ScreenHeaderBtn({iconUrl, dimension, handlePress}: ScreenHeaderBtnProps) {


  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}
