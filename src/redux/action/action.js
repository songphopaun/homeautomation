import {GET_DHT11} from '../types'
import axios from "axios";

export const getDHT = () => async dispatch => {
    const res = await axios.get(`https://smarthome-bu.online/sensor_DHT11List`);

    dispatch({
      type: GET_DHT11,
      payload: res.data
    });
}

