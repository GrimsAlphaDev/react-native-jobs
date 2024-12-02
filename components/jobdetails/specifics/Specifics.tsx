import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './specifics.style'


type SpecificsProps = {
  title: string,
  points: string[]
}

export default function Specifics({ title, points }: SpecificsProps) {

console.log('specifics', points)
  return (
    <View>
      <Text style={styles.title}>{title}: </Text>
      <View style={styles.pointsContainer}>
        {points.map((item, index) => 
        (
          <View style={styles.pointWrapper} key={ item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        )
        
        )}
      </View>
    </View>
  )
}