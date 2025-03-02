import React from 'react'; 
import Link from 'next/link';
const HomePage = () => { 
  return ( 
    <div> 
      <h1>Selamat Datang di Website Saya!</h1> 
      <p>Ini adalah halaman utama.</p>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <br />
      <Link href="/products" legacyBehavior>
        <a>Products</a>
      </Link>
      <br />
      <Link href="/users" legacyBehavior>
        <a>User</a>
      </Link>
      <br />
      <Link href="/weather" legacyBehavior>
        <a>Weather</a>
      </Link>
    </div>
  ); 
}; 
export default HomePage;