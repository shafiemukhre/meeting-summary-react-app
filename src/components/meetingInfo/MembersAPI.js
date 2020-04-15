import  { useState, useEffect} from 'react'

export const useFetchMembers = (url) => {
    const [data, setData] = useState([])

    useEffect( () => {
        async function fetchData(){
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiU1FEVmZtMldhWkY5VjU0dXFwUGxiaEtscjR1bWN2N09AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNTg2OTg1NjgyLCJleHAiOjE1ODcwNzIwODIsImF6cCI6IlNRRFZmbTJXYVpGOVY1NHVxcFBsYmhLbHI0dW1jdjdPIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.iNbTZakiGSEtnyB7_AbsMusQgvUw7N-egmxhAnnrbWFCJVppxVxhv5KPhwJlUa7knICg8tRdn_hZWdxPbgHy5uMZNkkkc8S7VFRY4wgp9HU3U-wSKTW3-T-hrWFPs_4htcKnedxuaTvvMfRhHStNumJyjKtfkvEIZ2If4M2Zj5RJuvkdGVSFAjdtpsNwxIO2uqe8Tnw_iZIqMbJj1Z_s9Wj6PnYZbcJ9sHLRrxBVgJZt075TcFj1D8F5jTX61knr3EPWeIM3s46sHc5lGqcorjYnrh0H7In5u2r2oVmSYcqjIn_OkPVqnbRdxd-qlKl3zVVnc4VTuc5YKnt4v3GBiA",
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