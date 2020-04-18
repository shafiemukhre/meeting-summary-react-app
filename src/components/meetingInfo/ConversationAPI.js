import { useState, useEffect} from 'react'
import auth from '../services/auth.json'

export const useFetchConversation = (url) => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect( () => {
        async function fetchData(){
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': auth.accessToken
                }
            })
            const data = await response.json()
            
            const newName = data.name
            const newDate = data.startTime.slice(0,10)
            const newTime = data.startTime.slice(11,19)
            

            setName(newName)
            setDate(newDate)
            setTime(newTime)
        }
        fetchData()
            .catch( err => {
                console.log('error',err)
            })
    },[url])

    return [name, date, time]
}