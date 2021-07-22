let numGuesses = 0;
const getMessages = () => {
    //.database() sends message to firebase, asking for
    // list of databases and .ref() gives a static picture/snapshot 
    //of database
    const messageRef = firebase.database().ref();
    //when "value" event (when snapshot is received) is triggered,
    //then log all the values in the snapshot of the database
    messageRef.on('value', (snapshot) => {
        const data = snapshot.val();
        //get user's passcode attempt from input field
        const passcodeAttempt = document.querySelector("#passcode").value;

        //loop over keys in json database (record is unique key)
        let flag = false;
        for (const recordKey in data) {
            //console.log(recordKey);
            //console.log(data[recordKey]);
            
            const record = data[recordKey];
            const storedPasscode = record.passcode;
            //console.log(storedPasscode);
            if (passcodeAttempt === storedPasscode) {
                console.log(`Message is: ${record.message}`);
                renderMessageAsHTML(record.message);
                flag = true;
                numGuesses = 0;
            }
        }
        if (flag === false) {
            renderMessageAsHTML("ERROR INVALID PASSCODE");
            numGuesses++;
            console.log(numGuesses);
        }
    });
    if (numGuesses >= 10) {
        numGuesses = 0;
        console.log("hello");
        document.querySelector("#viewMsg").classList.add("is-hidden");
        renderMessageAsHTML("Wait 10 seconds.");
        let timer = setInterval(timerMethod, 1000);
        let counter = 10;
        function timerMethod() {
            counter--;
            renderMessageAsHTML(`Wait ${counter} seconds.`);
            if (counter === 0) {
                document.querySelector("#viewMsg").classList.remove("is-hidden");
                clearInterval(timer);
                renderMessageAsHTML("Input password above.");
            }
        }
    }
}

const renderMessageAsHTML = (message) => {
    const passCodeInput = document.querySelector("#passcode");
    passCodeInput.value = "";

    const messageDisplay = document.querySelector("#message");
    messageDisplay.innerHTML = message;
}