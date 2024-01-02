"use client";

import NoteForm from "../../components/NoteForm";
import NoteCard from "../../components/NoteCard";
import { useNotes } from "../../context/NoteContext";
import { useEffect } from "react";
import useHasMounted from "../../hooks/useHasMounted";
import Loading from "../../components/Loading";
import BtnAppBar from "../../components/appBar";

function HomePage() {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes();
  }, []);

  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loading />; //<Loadig />
  }
  return (
    <div>
      <BtnAppBar />
      <div className="flex justify-center ml-96">
        <div className="flex items-center justify-center h-screen">
          <div className="block">
            <NoteForm />
            {notes.map((note) => (
              <NoteCard note={note} key={note.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;