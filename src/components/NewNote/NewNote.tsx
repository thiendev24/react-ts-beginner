import NoteForm from "../NoteForm/NoteForm";
import { NoteData, Tag } from "../type/Note.type";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <div>
      <h3>new note</h3>
      <NoteForm
        onSubmit={onSubmit}
        availableTags={availableTags}
        onAddTag={onAddTag}
      />
    </div>
  );
};

export default NewNote;
