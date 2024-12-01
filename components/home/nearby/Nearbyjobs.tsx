import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import styles from './nearbyjobs.style';

import useFetch from '../../../hook/useFetch'
import { router } from 'expo-router';


export default function Nearbyjobs() {

  const {data, isLoading, error} = useFetch('/search', {
      query: 'React developer',
      num_pages: 1,
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Job</Text>
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
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
)}
      </View>

    </View>
  )
}
