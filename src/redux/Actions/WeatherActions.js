import axios from 'axios';
import {LOCATION, STORE_CITIES} from '../Types';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MAP_API_KEY} from '../../helpers/constants';

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const getCities = () => {
  return dispatch => {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=${MAP_API_KEY}`,
        reqHeader,
      )
      .then(res => {
        if (res?.data?.list.length > 0) {
          dispatch({
            type: STORE_CITIES,
            payload: res?.data?.list,
          });
        }
        return Promise.resolve(res?.data);
      })
      .catch(e => {
        return Promise.reject(e);
      });
  };
};

export const getCityData = (lat, lon) => {
  return () => {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MAP_API_KEY}`,
        reqHeader,
      )
      .then(res => {
        return Promise.resolve(res?.data);
      })
      .catch(e => {
        return Promise.reject(e);
      });
  };
};

export const getLocationData = () => {
  Geolocation.getCurrentPosition(
    info => {
      return info.coords.latitude;
    },
    e => {
      console.log(e);
      return e;
    },
  );
};
