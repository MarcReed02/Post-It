// componentes y hooks necesarios desde 'react', uso de bliblioteca de iconos 'React-Icons'
import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { GoAlert } from 'react-icons/go';

const NoteForm = ({ onSubmit }) => {
  // estados locales utilizando el hook 'useState' de React.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  // Función para manejar el envío del formulario al hacer clic en el botón "Añadir Nota".
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple para el campo de descripción.
    if (description.trim() === '') {
      setDescriptionError(true);
      return;
    } else {
      setDescriptionError(false);
    }

    // se llama a la función 'onSubmit' pasada como prop desde el componente padre y le pasamos los valores del formulario.
    onSubmit({ title, description, important });
    // Reinicio de los estados para limpiar los campos del formulario después del envío.
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    // Componente del formulario que captura el envío y maneja los estados locales.
    <form onSubmit={handleSubmit} className="mb-4 p-4 rounded-md">
      {/* Campos para ingresar el título */}
      <div className="flex items-center mb-5 bg-gray-200 rounded-xl p-2 shadow-lg">
        <div className="mr-2">
          {/* Icono para el título */}
          <AiFillPlusCircle size={40} />
        </div>
        <input
          type="text"
          className="border rounded px-2 py-1 w-full outline-none bg-gray-200 text-2xl"
          placeholder="Titulo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Campo para ingresar la descripción */}
      <div className="flex items-center mb-5 bg-gray-200 rounded-xl p-2 shadow-lg">
        <div className="mr-2">
          {/* Icono para la descripción */}
          <BsFillChatLeftTextFill size={30} className='ml-2'/>
        </div>
        <textarea
          className="border rounded px-2 py-1 w-full outline-none bg-gray-200 text-2xl h-11 ml-2.5"
          placeholder="Descripción..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* Mostrar mensaje de error si la descripción está vacía */}
      {descriptionError && (
        <p className="text-white text-lg bg-[#F93D5B] p-2 flex items-center max-w-[300px] border rounded animate-pop-up mt-5">
          {/* Icono de alerta para el mensaje de error */}
          <GoAlert size={30} className="mr-2" />
          La descripción es obligatoria!
        </p>
      )}
      {/* Campo para seleccionar la importancia de la nota */}
      <div className="mt-2 m-2">
        <label className="flex items-center">
          {/* Checkbox para marcar como importante */}
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
            className="form-checkbox h-6 w-6 text-blue-500"
          />
          <span className="ml-2 text-2xl">Importante!</span>
        </label>
      </div>
      {/* Botón para enviar el formulario */}
      <button type="submit" className="mt-2 bg-blue-500 text-white p-3 rounded text-2xl shadow-lg hover:bg-blue-600 transition">
        Añadir Nota
      </button>
    </form>
  );
};

// Exportación de el componente 'NoteForm' para que pueda ser utilizado en otras partes de la aplicación
export default NoteForm;
