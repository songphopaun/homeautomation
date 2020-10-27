import {GET_DHT11} from '../types';

const dht11State = {
    temp:[],
    humi:[]
}

const Reducer =  (state = dht11State, action)=>{
    switch(action.type){
        case GET_DHT11:
        return {
            ...state,
            temp:action.payload[0].Temperature,
            humi:action.payload[0].Humidity
        }
        default: return state
    }
}
export default Reducer;