'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../styles/home.module.css';
import placeholderImage from '../assets/download_image_1729730709545.png'; // Imagen principal

export default function HomePage() {
  const router = useRouter();

  const goToLogin = () => router.push('/login');
  const goToRegister = () => router.push('/register');

  return (
    <div className={styles.container}>
      <Image
        src={placeholderImage}
        alt="Imagen principal"
        className={styles.mainImage}
        priority
      />
      <h1 className={styles.heading}>¡Bienvenido a Nuestra Aplicación!</h1>
      <p className={styles.description}>
        Ofrecemos una plataforma que facilita la conexión y gestión de tus
        servicios. Inicia sesión o regístrate para comenzar.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={goToLogin}>
          Iniciar Sesión
        </button>
        <button className={styles.button} onClick={goToRegister}>
          Registrarse
        </button>
      </div>
    </div>
  );
}
