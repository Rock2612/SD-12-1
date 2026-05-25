import { getServerURL } from './task1.js';

/**
 * @param {string} firstName - El primer nombre del usuario.
 * @param {string} lastName - El apellido del usuario.
 * @param {string} email - El correo electrónico del usuario.
 */
export async function addUser(firstName, lastName, email) {
  try {
    const url = `${getServerURL()}/users`;

    
    const nuevoUsuario = {
      firstName: firstName,
      lastName: lastName,
      email: email
    };

        const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoUsuario)
    });

    if (!respuesta.ok) {
      throw new Error(`Error al agregar usuario: ${respuesta.status}`);
    }

    const usuarioCreado = await respuesta.json();
   

  } catch (error) {
    console.error('Hubo un error al agregar el usuario:', error.message);
  }
}
