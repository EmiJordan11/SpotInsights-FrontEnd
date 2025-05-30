import axios from "axios"

export const config = {
  schedule: '0 0 19 */5 * *',
};

export default async function handler(_, res) {
  const api_url = import.meta.env.VITE_API_URL_SPOTINSIGHTS;

  console.log('Actualizando datos desde el Front...')

  try {
    const response = await axios.post(`${api_url}/scheduler`, null);

    if (response.status === 204) {
      console.log("Datos actualizados correctamente");
      res.status(200).send("Actualización exitosa");
    } else {
      console.log("Error al tratar de actualizar los datos");
      res.status(500).send("Fallo en la actualización");
    }
  } catch (err) {
    console.error("Error pinging backend:", err);
    res.status(500).send("Error en la solicitud al backend");
  }
}

