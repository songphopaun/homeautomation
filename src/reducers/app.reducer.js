import { APP_ACTION_DHT } from "../Constants"

const dht11State ={
    temperature:0,
    humidity:[],
    time:[]
}


const appReducer= (state = dht11State, action) => {
    switch (action.type) {
        case APP_ACTION_DHT:
            return{
                    ...state,
                    temperature:action.payload.Temperature,
                    humidity:action.payload.Humidity,
                    time:action.payload.Time,
            }

    default:
        return state
    }
}

export default appReducer