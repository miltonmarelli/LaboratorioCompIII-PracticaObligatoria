import { useState } from 'react';
import './Login.css';

function Login() {
  const [user, setUsername] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    if (value.toLowerCase().includes('o')) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleRegister = () => {
    if (user === '') {
      alert("Usuario inválido para registrarse");
    } 
    else if (user.toLowerCase().includes('o')) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    else {
      alert("¡Usuario registrado correctamente!");
    }
    setUsername(''); 
  }

  return (
    <div className='content-register'>
      <input
        type='text'
        placeholder='Ingrese su Nombre de Usuario'
        value={user}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{user}</p>
    </div>
  );
}

export default Login;