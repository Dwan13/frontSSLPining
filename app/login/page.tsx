'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '../../services/axios';
import styles from '../../styles/register.module.css'; // Reutilizamos estilos

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('', {
        query: `
          mutation {
            login(username: "${username}", password: "${password}")
          }
        `,
      });
      if (response.data.data.login) {
        router.push('/dashboard');
      } else {
        setMessage('Usuario o contraseña incorrectos');
      }
    } catch {
      setMessage('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        Iniciar Sesión
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
}
