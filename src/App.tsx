import "bootstrap/dist/css/bootstrap.css";
import "./app.scss";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "./components/NewNote/NewNote";
import { NoteData, RawNote, Tag } from "./components/type/Note.type";
import useLocalStorage from "./ultis/useLocalStorage";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/NoteList/NoteList";
import NoteLayout from "./components/NoteLayout/NoteLayout";
import Note from "./components/Note/Note";
import EditNote from "./components/EditNote/EditNote";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tag: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  };

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNote) => {
      return prevNote.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNote) => {
      return prevNote.filter((note) => note.id !== id);
    });
  };

  const updateTag = (id: string, label: string) => {
    setTags((prevTag) => {
      return prevTag.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  };

  const deleteTag = (id: string) => {
    setTags((prevTag) => {
      return prevTag.filter((tag) => tag.id !== id);
    });
  };

  return (
    <Container fluid>
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              availableTags={tags}
              notes={notesWithTags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />} />
        <Route index element={<Note onDelete={onDeleteNote} />} />
        <Route
          path="/:id/new"
          element={
            <EditNote
              onSubmit={onUpdateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />

        {/* wrong path will redirect to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
