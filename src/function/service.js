import axios from 'axios';

export function Fetchdht(){
   let url='https://smarthome-bu.online/sensor_DHT11List';
   var data=[]
    axios.get(url)
      .then(res => {
        data.push(res.data)
      })
      return data
}
export function Fetchdhtlineone(){
    let url='https://smarthome-bu.online/sensor_DHT11List';
   var data=[]
    axios.get(url)
      .then(res => {
        data.push(res.data)
      })
      return data
}