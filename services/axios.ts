import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: true, // Asegura que solo certificados válidos sean aceptados
});

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  httpsAgent,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
