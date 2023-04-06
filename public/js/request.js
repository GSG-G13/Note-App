fetch("/notes")
  .then((res) => res.json())
  .then((notes) => randerNoteItem(notes));
