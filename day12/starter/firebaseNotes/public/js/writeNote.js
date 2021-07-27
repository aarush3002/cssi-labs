let googleUser;
let categories = [];

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleNoteSubmit = () => {
  // 1. Capture the form data
  const noteTitle = document.querySelector('#noteTitle');
  const noteText = document.querySelector('#noteText');
  const noteCategory = document.querySelector('#noteCategory');
  const allCategories = document.querySelector('#addedCategories');
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    title: noteTitle.value,
    text: noteText.value,
    labels: categories
  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    noteTitle.value = "";
    noteText.value = "";
    noteCategory.value = "";
    allCategories.value = "";
  });
}

const addCategory = () => {
    const category = document.querySelector("#noteCategory").value;
    document.querySelector("#noteCategory").value = ''
    categories.push(category);
    document.querySelector("#addedCategories").innerHTML = categories;
}