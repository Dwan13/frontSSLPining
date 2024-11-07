'use client';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log(user);
    }
  }, [user, router]);

  return (
    <div>
      <h1>Bienvenido, {user?.username}</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}
