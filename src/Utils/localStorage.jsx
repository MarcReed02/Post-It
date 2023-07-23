// Función 'getStoredNotes' para obtener las notas almacenadas en localStorage
export const getStoredNotes = () => {
  // Obtener notas almacenadas en el localStorage con la clave 'stickyNotes'
  const storedNotes = localStorage.getItem('stickyNotes');
  // Si hay notas almacenadas, se transforman desde JSON a un array y las retornan
  // En caso contrario, retornamos un array vacío
  return storedNotes ? JSON.parse(storedNotes) : [];
};

// Función 'storeNotes' para almacenar las notas en localStorage.
export const storeNotes = (notes) => {
  // Almacenar notas en localStorage con la clave 'stickyNotes',
  // convertirlas a formato JSON antes de guardarlas
  localStorage.setItem('stickyNotes', JSON.stringify(notes));
};

