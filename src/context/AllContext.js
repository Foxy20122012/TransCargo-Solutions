// AllContexts.js
import { NotesProvider } from "../context/NoteContext";
import { ClientesProvider } from "../context/ClientesContext";
import { EmpleadosProvider } from "./EmpleadosContext";
import { MateriasPrimasProvider } from "./MateriasPrimasContext";
import { PedidosProvider } from "./PedidosContext";

const AllContexts = ({ children }) => (
  <NotesProvider>
    <ClientesProvider>
      <EmpleadosProvider>
      <PedidosProvider>
        <MateriasPrimasProvider>{children}</MateriasPrimasProvider>
        </PedidosProvider>
      </EmpleadosProvider>
    </ClientesProvider>
  </NotesProvider>
);

export default AllContexts;
