import React from 'react';

// Componente funcional que representa una nota
const Note = ({ title, description, important }) => {
  // Determinar el estilo de la nota en función de su importancia
  const noteStyle = `mb-4 p-4 ${important ? 'bg-[#FF5D5B]' : 'bg-[#FEFF9C]'} rounded-md min-h-170 transition-transform transform-gpu hover:scale-105 shadow-xl`;

  // Devuelve contenido JSX que representa la nota con su estilo y contenido
  return (
    <div className={noteStyle}>
      <h2 className="font-bold text-xl mb-2 leading-tight tracking-wide break-words" style={{
        fontFamily: 'Patrick Hand',
        fontSize: '2rem'
      }}>
        {title}
      </h2>
      <div className="overflow-y-auto">
        <p
          className="leading-tight tracking-wide"
          style={{
            fontFamily: 'Patrick Hand SC',
            fontSize: '1.7rem',
            lineHeight: '1.5',
            letterSpacing: '0.5px',
            wordBreak: 'break-word',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// Exportación del componente Note para que pueda ser utilizado en otras partes de la aplicación
export default Note;
