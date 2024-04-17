import React from 'react';
import './componentes/Diseño.css'; 

function App() {
  return (
    <div className="contenedor">
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
