// AllContexts.js
import { NotesProvider } from "../context/NoteContext";
import { ClientesProvider } from "../context/ClientesContext";
import { EmpleadosProvider } from "./EmpleadosContext";
import { MateriasPrimasProvider } from "./MateriasPrimasContext";

const AllContexts = ({ children }) => (
  <NotesProvider>
    <ClientesProvider>
      <EmpleadosProvider>
        <MateriasPrimasProvider>{children}</MateriasPrimasProvider>
      </EmpleadosProvider>
    </ClientesProvider>
  </NotesProvider>
);

export default AllContexts;
