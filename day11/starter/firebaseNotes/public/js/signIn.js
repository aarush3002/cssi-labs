const google_signIn = () => {
    console.log("Calling google sign in");
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            //Do something with the result
            console.log(`Result is: ${result}`);
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;

            console.log(user.uid);
            window.location = 'writeNote.html';
        })
        .catch(error => {
            //Something bad happened
            console.log(error);
        })
};

const email_signIn = () => {
    console.log("Calling email/password sign in");
    const userEmail = document.querySelector("#email");
    const userPassword = document.querySelector("#password");
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .signInWithPopup()
        .then((result) => {
            console.log(`Result is: ${result}`);
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;

            console.log(user.uid);
            window.location = 'writeNote.html';
        })
        .catch((error) => {
            console.log(error);
        })
};