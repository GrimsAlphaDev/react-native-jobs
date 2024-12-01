import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style';

export default function Welcome() {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
      Hello, User
        </Text>
        <Text style={styles.welcomeMessage}>
      Find your perfect job
        </Text>
      </View>

      <View style={styles.searchContainer}> 
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
      </View>

    </View>
  )
}
