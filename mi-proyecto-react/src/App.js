import React, { useEffect, useState } from 'react';
import './componentes/Diseño.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://zfqlwupplahepakjglsp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmcWx3dXBwbGFoZXBha2pnbHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMjU0NzIsImV4cCI6MjAyODkwMTQ3Mn0.ym4G8npHB33qCUKwhy2KXO_gu-8-LT1UcNLSLlW7kfw");


function App() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias();
  }, []);

  async function getCategorias() {
    const { data } = await supabase.from("categorias").select();
    setCategorias(data);
  }

  return (

    <div className="contenedor">
      <ul>
        {categorias.map((categorias) => (
          <li key={categorias.nombre}>{categorias.nombre}</li>
        ))}
      </ul>
      <h1 className="titulo">Diseño de Aplicacion Web</h1>
      <ul>
        <li><button className="BtnDir"><a href="categoria.html">Categoria</a></button></li>
        <li><button className="BtnDir"><a href="clientes.html">Clientes</a></button></li>
        <li><button className="BtnDir"><a href="direccion.html">Direccion</a></button></li>
        <li><button className="BtnDir"><a href="genero.html">Genero</a></button></li>
        <li><button className="BtnDir"><a href="productos.html">Productos</a></button></li>
        <li><button className="BtnDir"><a href="sesiones.html">Sesiones</a></button></li>
        <li><button className="BtnDir"><a href="sessiones_productos.html">Sesiones_Productos</a></button></li>
        <li><button className="BtnDir"><a href="usuario.html">Usuarios</a></button></li>
      </ul>
    </div>
  );
}

export default App;
