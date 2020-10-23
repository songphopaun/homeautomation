import axios from 'axios';
import { APP_ACTION_DHT } from '../Constants';

export const getDHT =()=> async dispatch =>{
    const res = await axios.get('http://localhost:4000/api/temp')

    dispatch({
        type: APP_ACTION_DHT,
        payload : res.data[0]
    })
}