import { getServerURL } from './task1.js';

/**
 
 * @param {number|string} id - El número de identificación del usuario a eliminar.
 */
export async function delUser(id) {
  try {
        const url = `${getServerURL()}/users/${id}`;

    
    const respuesta = await fetch(url, {
      method: 'DELETE'
    });

    if (!respuesta.ok) {
      throw new Error(`Error al eliminar el usuario con ID ${id}: ${respuesta.status}`);
    }

  } catch (error) {
    console.error('Hubo un error al eliminar el usuario:', error.message);
  }
}
