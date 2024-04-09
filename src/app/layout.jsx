import 'bootstrap/dist/css/bootstrap.min.css'
import { montserrat } from './fonts.jsx'
import "./globals.css";

export const metadata = {
  title: "Mi Perfil 🤓",
  description: "En este perfil podras encontrar toda mi experiencia profesional, con que herramientas trabajo y los proyectos en los que he participado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
