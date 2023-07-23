// Importación de librerías y componentes.
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getStoredNotes, storeNotes } from './Utils/localStorage';

// Componente funcional 'App'
const App = () => {
  // Estado para almacenar las notas
  const [notes, setNotes] = useState([]);

  // Efecto que se ejecuta al montar el componente para obtener las notas almacenadas
  useEffect(() => {
    // Se obtienen las notas almacenadas utilizando la función 'getStoredNotes' del módulo 'localStorage'.
    const storedNotes = getStoredNotes();
    // Si hay notas almacenadas, se establecen como el nuevo estado 'notes'
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Función para agregar una nueva nota al estado 'notes'
  const addNote = (note) => {
    // Actualización de el estado 'notes' añadiendo la nueva nota utilizando el operador spread (...) y el parámetro 'note'
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Efecto que se ejecuta cada vez que el estado 'notes' cambia para guardar las notas en el localStorage
  useEffect(() => {
    // Se utiliza la función 'storeNotes' del módulo 'localStorage' para guardar las notas actuales en localStorage
    storeNotes(notes);
  }, [notes]);

  // Renderizado del componente 'App'
  return (
    <div className="container mx-auto p-4">
      {/* Título principal */}
      <h1 className="text-5xl font-bold mb-4 ml-4">Post-It</h1>
      {/* Componente 'NoteForm' para agregar nuevas notas, se pasa la función 'addNote' como prop 'onSubmit'. */}
      <NoteForm onSubmit={addNote} />
      {/* Componente 'NoteList' para mostrar la lista de notas, se pasa el estado 'notes' como prop 'notes'. */}
      <NoteList notes={notes} />
    </div>
  );
};

// Exportación del componente 'App' como el componente principal del archivo
export default App;
