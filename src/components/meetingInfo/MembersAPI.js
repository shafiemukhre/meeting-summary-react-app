import  { useState, useEffect} from 'react'
import auth from '../services/auth.json'

export const useFetchMembers = (url) => {
    const [data, setData] = useState([])

    useEffect( () => {
        async function fetchData(){
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': auth.accessToken
                }
            })
            const data = await response.json()
            const item = data.members.map((item) => ([
                item.name,
                item.email
            ]))
            setData(item)
        }
        fetchData()
            .catch( err => {
                console.log('error',err)
            })
    },[url])

    return data
}