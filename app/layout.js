// 'use client'

import Nav from "../components/Nav.js";
import './global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}