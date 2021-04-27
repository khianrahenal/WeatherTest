import axios from 'axios';
import {MAP_API_KEY} from './constants';
import DeviceInfo from 'react-native-device-info';

export const getTemperature = kelvin_temp => {
  return Math.round(kelvin_temp - 273.15).toString() + '° C';
};

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const getMessage = async (lat, lon) => {
  await axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MAP_API_KEY}`,
      reqHeader,
    )
    .then(res => {
      return 'Current Temperature: ' + getTemperature(res?.data?.main?.temp);
    })
    .catch(e => {
      throw 'Unable to get Temperature';
    });
};

export const getUniqDeviceId = () => {
  return new Promise(resolve => {
    resolve(DeviceInfo.getUniqueId());
  });
};
