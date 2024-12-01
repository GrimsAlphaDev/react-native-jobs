import { ActivityIndicator, FlatList, SectionList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch'

export default function Popularjobs() {
  const router = useRouter();

  const {data, isLoading, error} = useFetch('/search', {
      query: 'React developer',
      num_pages: 1,
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went Wrong</Text>
        ) : (
          <FlatList
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard
            handleCardPress={() => {}}
            item={item}
            selectedJob={[]}
            key={item.job_id} 
            />
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          horizontal
          />
      )}
      </View>

    </View>
  )
}
