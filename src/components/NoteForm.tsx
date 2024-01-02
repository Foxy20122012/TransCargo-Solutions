import { useState, useRef, useEffect } from "react";
import { useNotes } from "../context/NoteContext";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);

  const { createNote, selectedNote, setSelectedNote, updateNote } = useNotes();

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title || "");
      setContent(selectedNote.content || "");
    }
  }, [selectedNote]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (selectedNote) {
          await updateNote(selectedNote.id, {
            title,
            content,
          });
          setSelectedNote(null);
        } else {
          await createNote({
            title,
            content,
          });
        }

        setTitle("");
        setContent("");

        titleRef.current?.focus();
      }}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="title"
        autoFocus
        placeholder="Title"
        className="border border-gray-300 w-full px-4 py-2 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        ref={titleRef}
      />

      <textarea
        name="content"
        placeholder="Content"
        className="w-full px-4 py-2 text-gray-800 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>

      <div className="flex justify-end gap-x-2">
        <button
          className="px-5 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!title || !content}
          type="submit"
        >
          {selectedNote ? "Update" : "Create"}
        </button>

        {selectedNote && (
          <button
            className="px-5 py-2 text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
            onClick={() => {
              setSelectedNote(null);
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
