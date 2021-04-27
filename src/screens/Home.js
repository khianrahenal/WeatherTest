import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StatusBar,
  Alert,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCities} from '../redux/Actions/WeatherActions';
import {wp, hp, FONTS} from '../helpers/theme';
import {getTemperature} from '../helpers/notificationmessage';

const Home = ({navigation}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities())
      .then(res => {
        setWeatherData(res?.list);
        setIsLoading(false);
      })
      .catch(e => {
        Alert.alert('Unable to Fetch Cities');
        setIsLoading(false);
      });
  }, []);

  const capitalize = s =>
    s
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  const renderCity = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('City', {
            cityId: item?.id,
          });
        }}>
        <View style={styles.cityContainer}>
          <View>
            <Text style={{...FONTS.robotoRegular, fontSize: 20}}>
              {item?.name}
            </Text>
            <Text style={{...FONTS.robotoLight, fontSize: 15, marginTop: 8}}>
              {capitalize(item?.weather[0].description)}
            </Text>
          </View>
          <Text style={{...FONTS.robotoRegular, fontSize: 30}}>
            {getTemperature(item?.main?.temp)}
          </Text>
        </View>
        <View style={styles.lineSeparator} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#184026" barStyle="light-content" />
      {isLoading ? (
        <>
          <View style={styles.loadingImage1}>
            <Image
              source={require('../assets/loaders/42369-weather-wind.gif')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.loadingImage2}>
            <Image
              source={require('../assets/loaders/loading.gif')}
              style={styles.imageLoading}
              resizeMode="contain"
            />
          </View>
        </>
      ) : (
        <FlatList data={weatherData} renderItem={renderCity} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingImage1: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  loadingImage2: {
    width: 500,
    height: 200,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  imageLoading: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  cityContainer: {
    width: wp(100),
    height: hp(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  lineSeparator: {
    height: 0.5,
    marginTop: 5,
    width: '100%',
    backgroundColor: '#000',
  },
});

export default Home;
