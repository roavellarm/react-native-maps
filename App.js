import React, { useState } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function App() {
  const coordinate = { latitude: 37.78825, longitude: -122.4324 }
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const marker = {
    title: 'This a marker title',
    description: 'This is a marker description',
  }

  const handleRegionChange = (newRegion) => {
    // setRegion(newRegion)
    console.log({ newRegion })
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={region}
        onRegionChange={handleRegionChange}
      >
        <Marker
          coordinate={coordinate}
          // title='This a marker title'
          // description='This is a marker description'
          image={require('./pin.png')}
        >
          <Callout {...marker}>
            <View style={styles.customView}>
              <Text style={styles.title}>{marker.title}</Text>
              <Text style={styles.description}>{marker.description}</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  customView: {
    width: 200,
    height: 200,
    backgroundColor: 'lightpink',
    padding: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
  },
})
