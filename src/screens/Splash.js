import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, FONTS} from '../helpers/theme';
import {getLocationData} from '../redux/Actions/WeatherActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

const Splash = ({navigation}) => {
  useEffect(() => {
    getLocation();
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        if (info) {
          setLocation(info.coords.latitude, info.coords.longitude);
        }
      },
      e => {
        console.log(e);
      },
    );
  };

  const setLocation = async (lat, lon) => {
    try {
      await AsyncStorage.setItem('latitude', lat.toString());
      await AsyncStorage.setItem('longitude', lon.toString());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.weatherText}>Weather App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherText: {
    ...FONTS.robotoBold,
    color: color.green,
    fontSize: 40,
  },
});

export default Splash;
