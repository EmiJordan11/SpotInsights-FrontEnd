import axios from "axios"


export const sendAuthorizationCode = async (code) => {
    const api_url = import.meta.env.VITE_API_URL_SPOTINSIGHTS;

    const response = await axios.post(api_url, null ,{
        params: {code},
    })

    return response;
}