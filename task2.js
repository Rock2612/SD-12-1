
import { getServerURL } from './task1.js';


export async function listUsers() {
  try {
    const url = `${getServerURL()}/users`;
    
    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
      throw new Error(`Error al obtener usuarios: ${respuesta.status}`);
    }
    
    const usuarios = await respuesta.json();
    
    console.log(usuarios);
    
  } catch (error) {
    console.error('Hubo un error al listar los usuarios:', error.message);
  }
}

