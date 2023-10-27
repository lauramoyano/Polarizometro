import axios from 'axios';

// URL de la API (cambia esto según tu configuración)
const apiUrl = 'http://localhost:8000/user/api/v1';

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/user/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para registrar un usuario
export const registerUser = async ({ name,email, password, phone }) => {
  try {
    const response = await axios.post(`${apiUrl}/user/`, {name, email, password, phone });
    return response;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async ({ email, password }) => {
  try {
    const users = await getAllUsers();
    
    const user = users.find((user) => user.email === email);

    if (!user) {
      throw new Error('El usuario no existe');
    }

    if (user.password !== password) {
      throw new Error('La contraseña es incorrecta');
    }

    return user;
  } catch (error) {
    throw error;
  }
};
