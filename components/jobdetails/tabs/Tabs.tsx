import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './tabs.style'
import { SIZES } from '../../../constants'

type TabsProps = {
  tabs: string[],
  activeTab: string,
  setActiveTab: (tab: string) => void
}

type TabButtonProps = {
  name: string,
  activeTab: string,
  onHandleSearchType: () => void
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  return (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
  );
}

export default function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}
