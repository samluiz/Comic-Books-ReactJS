import axios from "axios";
import md5 from 'md5'

  const publicKey = '553359b066253270b7011421a11273da'
  const privateKey = "4abea651cba50396603fd80d38eefe536c7ebf1c"

  const time = Number(new Date())

  const hash = md5(time + privateKey + publicKey)

  const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
      ts: time,
      apikey: publicKey,
      hash: hash,
    }
  })

  export default api;