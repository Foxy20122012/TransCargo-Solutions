import { Note } from "@prisma/client";
import { useNotes } from "../context/NoteContext";
import { HiTrash, HiPencil } from 'react-icons/hi';

function NoteCard({ note }: { note: Note }) {
  const { deleteNote, setSelectedNote } = useNotes();

  const handleDeleteNote = async () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      await deleteNote(Number(note.id));
    }
  };

  const handleEditNote = () => {
    setSelectedNote(note);
  };

  return (
    <div key={note.id} className="bg-white p-6 my-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex justify-between items-center">
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-2">{note.title}</h1>
        <p className="text-gray-700">{note.content}</p>
        <p className="text-sm text-gray-500 mt-2">
          {note.createdAt ? new Date(note.createdAt).toLocaleDateString() : ''}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleDeleteNote}
          className="text-red-600 hover:text-red-800 focus:outline-none transition duration-300"
        >
          <HiTrash className="text-xl" />
        </button>
        <button
          onClick={handleEditNote}
          className="text-blue-600 hover:text-blue-800 focus:outline-none transition duration-300"
        >
          <HiPencil className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
