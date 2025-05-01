import axios from "axios"


export const sendAuthorizationCode = async (code) => {
    const response = await axios.post('http://localhost:8080/api/sync-data', null ,{
        params: {code},
    })

    return response;
}