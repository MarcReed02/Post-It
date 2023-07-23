// Importamos React y el componente 'Note' desde el archivo './Note'
import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  // Componente 'NoteList' recibe una lista de notas (notes) como prop
  return (
    // Contenedor con una cuadrícula de columnas
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Mapeo de cada nota en la lista 'notes' y creamos un componente 'Note' con sus propiedades */}
      {notes.map((note, index) => (
        // 'index' como clave (key) para cada elemento generado por el mapeo
        <Note key={index} title={note.title} description={note.description} important={note.important} />
      ))}
    </div>
  );
};

// Exportación de el componente 'NoteList' para que pueda ser utilizado en otras partes de la aplicación
export default NoteList;
