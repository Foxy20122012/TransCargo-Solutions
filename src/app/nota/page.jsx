'use client'
import { useNotes } from "../../context/NoteContext";
import { useEffect } from "react";
import useHasMounted from "../../hooks/useHasMounted";
import Loading from "../../components/Loading";
import BtnAppBar from "../../components/appBar";
import NoteForm from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";

function HomePage() {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes();
  }, []);

  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <BtnAppBar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Actividades Pendientes.</h1>
        <NoteForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          {notes.map((note) => (
            <NoteCard note={note} key={note.id} className="transform hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
