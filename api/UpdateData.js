import axios from "axios"


export default async function handler(_, res) {
  const api_url = process.env.VITE_API_URL_SPOTINSIGHTS;

  console.log('Actualizando datos desde el Front...')

  axios.post(`${api_url}/scheduler`, null)
    .then(() => console.log("Petición enviada"))
    .catch((err) => console.error("Error:", err));

  res.status(202).send("Petición enviada, procesando en segundo plano");
}

