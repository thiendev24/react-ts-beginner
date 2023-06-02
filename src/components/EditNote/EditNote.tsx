import NoteForm from "../NoteForm/NoteForm";
import { useNote } from "../NoteLayout/NoteLayout";
import { NoteData, Tag } from "../type/Note.type";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();
  return (
    <div>
      <h3>Edit note</h3>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        availableTags={availableTags}
        onAddTag={onAddTag}
      />
    </div>
  );
};

export default EditNote;
