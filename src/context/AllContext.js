// AllContexts.js
import { NotesProvider } from "../context/NoteContext";
import { ClientesProvider } from "../context/ClientesContext";
import { EmpleadosProvider } from "./EmpleadosContext";

const AllContexts = ({ children }) => (
  <NotesProvider>
    <ClientesProvider>
      <EmpleadosProvider>{children}</EmpleadosProvider>
    </ClientesProvider>
  </NotesProvider>
);

export default AllContexts;
