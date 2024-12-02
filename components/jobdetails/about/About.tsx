import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './about.style'

type AboutProps = {
  info: string
}

export default function About({info}: AboutProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About this job: </Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}
