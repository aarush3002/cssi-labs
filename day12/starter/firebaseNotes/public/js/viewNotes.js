let googleUserId;
let displayName;
let email;
window.onload = () => {
    // when page loads, check user logged in state
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            googleUserId = user.uid;
            displayName = user.displayName;
            email = user.email;
            getNotes(googleUserId);
        } else {
            // if not logged in, redirect to log in page
            window.location = 'index.html';
        }
    });
};

// Get user's notes from database, display notes on page
const getNotes = (userId) => {
    console.log(userId);
    //get user's notes from db
    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.on('value', snapshot => {
        console.log(snapshot.val());
        writeNotesToHtml(snapshot.val());
    });
}

const writeNotesToHtml = (data) => {
    const noteRenderArea = document.querySelector('#app');
    for (let noteKey in data) {
        // create html string for one note 
        let noteHtml = createHtmlForNote(data[noteKey]);
        noteRenderArea.innerHTML += noteHtml;
    }
    //put all html into page at once
};

// returns a string of html for one note
const createHtmlForNote = (note) => {
    // TODO: create the elements
    let randomColor = Math.floor(Math.random()*16777215).toString(16); 
    console.log(randomColor);
    return `<div class="column is-one-third">
                <div class="card" style="background: #${randomColor}">
                    <header class="card-header">
                        <p class="card-header-title">
                            ${note.title}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <b>Your Name:</b> ${displayName}
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <b>Your Email:</b> ${email}
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            ${note.text}
                        </div>
                    </div>
                </div>
            </div>`;
}

const addFilter = () => {
   // console.log('addFilter called');
    const noteRenderArea = document.querySelector('#app');
    noteRenderArea.innerHTML = "";
    const filter = document.querySelector('#search').value;
    const userRef = firebase.database().ref(`users/${googleUserId}`);
    let filtered_data = [];
    userRef.on('value', snapshot => {
        //console.log(snapshot.val());
        for (let noteKey in snapshot.val()) {
            //console.log('hello');
            //console.log(snapshot.val()[noteKey].labels);
            if (snapshot.val()[noteKey].labels.includes(filter)) {
                filtered_data.push(snapshot.val()[noteKey]);
            }
        }
    });
    writeNotesToHtml(filtered_data);
}