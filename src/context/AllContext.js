// AllContexts.js
import { NotesProvider } from "../context/NoteContext";
import { ClientesProvider } from "../context/ClientesContext";

const AllContexts = ({ children }) => (
  <NotesProvider>
    <ClientesProvider>{children}</ClientesProvider>
  </NotesProvider>
);

export default AllContexts;
