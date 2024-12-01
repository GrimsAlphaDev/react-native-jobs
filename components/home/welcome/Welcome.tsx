import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobtypes = [
  "Full Time",
  "Part Time",
  "Contractor",
]

export default function Welcome() {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full Time');

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
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobtypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => { setActiveJobType(item) 
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap:SIZES.small }}
          horizontal
        />
      </View>

    </View>
  )
}
