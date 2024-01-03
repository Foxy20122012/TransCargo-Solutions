'use client'
import { useState } from 'react';
import { Note } from "@prisma/client";
import { useNotes } from "../context/NoteContext";
import { HiTrash, HiPencil } from 'react-icons/hi';
import { FaCheckCircle, FaPenAlt } from 'react-icons/fa';  // Utilizo FaPenAlt para el icono de edición deshabilitado

function NoteCard({ note }: { note: Note }) {
  const { deleteNote, setSelectedNote } = useNotes();
  const [completed, setCompleted] = useState(false);

  const handleDeleteNote = async () => {
    const shouldDelete = window.confirm("¿Estás seguro de que deseas eliminar esta nota?");
    if (shouldDelete) {
      await deleteNote(Number(note.id));
    }
  };

  const handleEditNote = () => {
    if (!completed) {
      setSelectedNote(note);
    }
  };

  const handleCompleteNote = () => {
    setCompleted(!completed);
  };

  return (
    <div key={note.id} className={`bg-white p-6 my-4 rounded-lg shadow-md ${completed ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'} hover:shadow-lg transition duration-300 flex justify-between items-center`}>
      <div className="flex-1">
        <h1 className={`text-2xl font-bold mb-3 ${completed ? 'text-green-800' : 'text-gray-800'}`}>{note.title}</h1>
        <p className={`text-lg ${completed ? 'text-green-600' : 'text-gray-600'}`}>{note.content}</p>
        <p className="text-sm text-gray-500 mt-3">
          {note.createdAt ? new Date(note.createdAt).toLocaleDateString() : ''}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleCompleteNote}
          className={`text-${completed ? 'green' : 'red'}-600 hover:text-${completed ? 'green' : 'red'}-800 focus:outline-none transition duration-300`}
        >
          {completed ? <FaCheckCircle className='text-xl' /> : <FaPenAlt className='text-xl' />}
        </button>
        <button
          onClick={handleDeleteNote}
          className="text-red-600 hover:text-red-800 focus:outline-none transition duration-300"
        >
          <HiTrash className="text-2xl" />
        </button>
        <button
          onClick={handleEditNote}
          className={`text-blue-600 hover:text-blue-800 focus:outline-none transition duration-300 ${completed ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={completed}
        >
          <HiPencil className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
