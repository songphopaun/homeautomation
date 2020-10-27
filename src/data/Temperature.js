import React , {useState , useEffect} from 'react'
import {FetchDht} from '../function/service'

function Temperature() {

    const [temp, setTemp] = useState(0)


    useEffect(() => {
        const data = FetchDht()
        data.then(item=>{
            setTemp(item[0].Temperature)
        })
    }, [])
    return (
        <div>
            {temp}
        </div>
    )
}

export default Temperature