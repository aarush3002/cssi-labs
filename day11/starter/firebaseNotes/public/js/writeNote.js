let googleUser, userId;
let categories = [];

window.onload = () => {
    firebase.auth()
        .onAuthStateChanged(user => {
            if (user) {
                console.log(`Logged in as: ${user.displayName}`);
                googleUser = user;
                userId = googleUser.uid;
                const welcome = document.querySelector("#welcomeMessage");
                welcome.innerHTML = `Welcome, ${user.displayName}! What's on your mind?`;
            } else {
                window.location = 'index.html';
            }
        });
};

const submitNote = () => {
    const note = document.querySelector("#noteText").value;
    const title = document.querySelector("#noteTitle").value;

    firebase.database().ref(`users/${userId}`).push(
        {
            title: title,
            note: note,
            created: Date.now(),
            labels: categories
        }) 
        .then(() => {
            document.querySelector("#noteText").value = '';
            document.querySelector("#noteTitle").value = '';
            document.querySelector("#noteCategory").value = '';
            document.querySelector("#addedCategories").innerHTML = '';
            alert("Your note has been submitted successfully!");
            //indicate to user that note was successfully submitted
        })
        .catch(error => {
            console.log(`Something bad happened ...\n${error}`);
        });
};

const addCategory = () => {
    const category = document.querySelector("#noteCategory").value;
    document.querySelector("#noteCategory").value = ''
    categories.push(category);
    document.querySelector("#addedCategories").innerHTML = categories;
}