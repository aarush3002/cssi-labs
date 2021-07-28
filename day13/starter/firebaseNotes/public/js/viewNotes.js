let googleUserId, editedNoteId; //global variables

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUserId = user.uid;
      getNotes(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html'; 
    };
  });
};

const getNotes = (userId) => {
  const notesRef = firebase.database().ref(`users/${userId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
    
    let dict = {};
    for(const noteItem in data) {
        //console.log(data);
        dict[noteItem] = data[noteItem]["title"];
    }
    
    // Create items array
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        if (second[1].localeCompare(first[1])) {
            return second[1].localeCompare(first[1]);
        } else if (first[1].localeCompare(second[1])){
            return -1;
        } else {
            return 0;
        }
    });
    
    let cards = ``;
    for(const index in items) {
        const noteItem = items[index][0];
        const note = data[noteItem];
        // For each note create an HTML card
        cards += createCard(note, noteItem);
    };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

const createCard = (note, noteId) => {
    return `
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${note.title}</p>
                </header>
                <div class="card-content">
                    <div class="content">${note.text}</div>
                </div>
                <footer class="card-footer">
                    <a id="${noteId}" href="#" class="card-footer-item"
                        onclick="deleteNote('${noteId}')">
                        Delete
                    </a>
                    <a id="${noteId}" href="#" class="card-footer-item"
                        onclick="editNote('${noteId}')">
                        Edit
                    </a>
                </footer>
            </div>
        </div>`;
};

// href="#" is a link to the current page, so it'll reload the page and show the updates.

const deleteNote = (noteId) => {
    if (confirm("Are you sure you want to delete this note?")) {
        console.log(`Deleting note: ${noteId}`);
        firebase.database().ref(`users/${googleUserId}/${noteId}`).remove();
    }
};

const editNote = (noteId) => {
    console.log(`Editing note: ${noteId}`);

    editedNoteId = noteId;
    // show the modal dialogue
    const editNoteModal = document.querySelector("#editNoteModal");
    editNoteModal.classList.toggle("is-active");
    // Get the text from the note in the database
    const notesRef = firebase.database().ref(`users/${googleUserId}/${noteId}`);
    notesRef.on('value', snapshot => {
        const data = snapshot.val();
        console.log(data);


        // show the text from the database in the modal

        // set the text into an editable form (input)
        document.querySelector("#editTitleInput").value = data["title"];
        document.querySelector("#editTextInput").value = data["text"];        
    });

    // save updated text to the database.

    // Hide the modal box ... once the user has made their selection
}

const closeEditModal = () => {
    const editNoteModal = document.querySelector("#editNoteModal");
    editNoteModal.classList.toggle("is-active");
}

const saveEditedNote = () => {
    const newTitle = document.querySelector("#editTitleInput").value;
    const newText = document.querySelector("#editTextInput").value;

    firebase.database().ref(`users/${googleUserId}/${editedNoteId}`)
        .set({
            title: newTitle,
            text: newText
        });
    closeEditModal();
}

const archiveNote = (noteId) => {
    //add functionality.
}