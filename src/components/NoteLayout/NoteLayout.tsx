import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import Note from "../type/Note.type";

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  console.log(useParams());
  console.log(id);

  const note = notes.find((note) => note.id === id);
  if (note === null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export const useNote = () => {
  return useOutletContext<Note>();
};

export default NoteLayout;
