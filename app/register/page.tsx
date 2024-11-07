'use client';

import React, { useState } from 'react';
import axios from '../../services/axios';
import styles from '../../styles/register.module.css';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('', {
        query: `
          mutation {
            register(username: "${username}", password: "${password}", email: "${email}")
          }
        `,
      });
      setMessage(response.data.data.register);
      console.log(response);
      
      router.push('/dashboard');
    } catch {
      setMessage('Error en el registro');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Registro</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Registrarse
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
}
