const noteList = document.querySelector("#notes");
const form = document.querySelector(".form");

// note creation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const newData = Object.fromEntries(data);
  console.log(newData);

  const obj = {
    title: newData.title,
    tag: newData.tags,
    body: newData.body,
  };
  fetch("/create-note", {
    method: "POST",
    headers: {
      Accept: "application/json text/plain */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((result) => result.json())
    .then((data) => randerNoteItem(data.data));

  location.reload();
});

// render items on
const randerNoteItem = (notes) => {
  console.log("Rander", notes);

  for (let i = 0; i < notes.length; i++) {
    const noteItem = document.createElement("li");
    noteItem.classList.add("note-item");

    const noteBox = document.createElement("div");
    noteBox.classList.add("note-box");
    noteItem.appendChild(noteBox);

    const noteTitle = document.createElement("h3");
    noteTitle.classList.add("note-title");
    noteTitle.textContent = notes[i].title;
    noteBox.appendChild(noteTitle);

    const noteBody = document.createElement("article");
    noteBody.classList.add("note-body");
    noteBody.textContent = notes[i].body;

    noteBox.appendChild(noteBody);

    const noteTags = document.createElement("div");
    noteTags.classList.add("note-tags");
    noteBox.appendChild(noteTags);

    const noteTag = document.createElement("mark");
    noteTag.classList.add("note-tag");
    noteTag.textContent = notes[i].name;
    noteTags.appendChild(noteTag);

    noteList.appendChild(noteItem);
  }
};
