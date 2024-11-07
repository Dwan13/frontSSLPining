import './globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className='container'>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
