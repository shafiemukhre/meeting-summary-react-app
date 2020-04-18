// import { useState, useEffect } from 'react'

// export function AuthAPI(){

//     const [accessToken, setAccessToken] = useState('')

//     useEffect( async () => {
//         const url = 'https://api.symbl.ai/oauth2/token:generate'
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json' 
//             },
//             body: {
//                 'type': 'application',
//                 'appID': process.env.REACT_APP_ID,
//                 'appSecret': process.env.REACT_APP_SECRET
//             }
//         }).catch( (err) => {
//             console.log(`this is catch: ${err}`)
//         })
//         const data = await response.json()
//         const newAccessToken = data.accessToken
//         setAccessToken(newAccessToken)

//     },[])


//     return accessToken
// }