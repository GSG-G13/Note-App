const noteList = document.querySelector('#notes');



const randerNoteItem = (notes) => {
  noteList.innerHTML = "";
  console.log('Rander')

  for (let i = 0; i < notes.length; i++) {

    const noteItem = document.createElement('li');
    noteItem.classList.add('note-item');


    const noteBox = document.createElement('div');
    noteBox.classList.add('note-box');
    noteItem.appendChild(noteBox);

    const noteTitle = document.createElement('h3');
    noteTitle.classList.add('note-title');
    noteTitle.textContent=notes[i].title;
    noteBox.appendChild(noteTitle);

    const noteBody = document.createElement("article");
    noteBody.classList.add('note-body');
    noteBody.textContent=notes[i].body;

    noteBox.appendChild(noteBody);

    const noteTags = document.createElement('div');
    noteTags.classList.add('note-tags');
    noteBox.appendChild(noteTags);


    const noteTag = document.createElement('mark');
    noteTag.classList.add('note-tag');
    noteTags.appendChild(noteTag);

    noteList.appendChild(noteItem);
  }

}

