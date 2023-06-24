import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <Navbar></Navbar>
        {children}
       <Footer></Footer>
      </body>
    </html>
  );
}