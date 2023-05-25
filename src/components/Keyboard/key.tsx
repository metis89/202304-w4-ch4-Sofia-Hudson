import { useContext } from "react";

export default function Key() {
  const {
    sample,
    notesContext: { notes },
  } = useContext(AppContext);

  return (
    <section>
      <h2>Notes List</h2>
      <p>{sample}</p>
      <AddNote></AddNote>
      <br />
      <ul className="notes">
        {notes.map((item) => (
          <CardNote item={item} key={item.id}></CardNote>
        ))}
      </ul>
    </section>
  );
}
