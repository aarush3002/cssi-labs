const submitMessage = () => {
    console.log("Submitting message...");
    const passcodeInput = document.querySelector("#passcode");
    const messageInput = document.querySelector("#message");
    const passcodeValue = passcodeInput.value;
    const messageValue = messageInput.value;
    
    // send data to firebase
    firebase.database().ref().push({
        message: messageValue,
        passcode: passcodeValue
    });

    //clear values from inputs
    passcodeInput.value = "";
    messageInput.value = "";
};
/**
const sendMessageButton = document.querySelector('.button');
sendMessageButton.addEventListener('click', submitMessage);
*/