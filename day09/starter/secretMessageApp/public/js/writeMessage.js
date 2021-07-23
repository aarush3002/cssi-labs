function contains(password, allowedChars) {
 
    for (i = 0; i < password.length; i++) {
 
            var char = password.charAt(i);
 
             if (allowedChars.indexOf(char) >= 0) { return true; }
 
         }
 
     return false;
}

const submitMessage = () => {
    console.log("Submitting message...");
    const passcodeInput = document.querySelector("#passcode");
    const messageInput = document.querySelector("#message");
    const passcodeValue = passcodeInput.value;
    const messageValue = messageInput.value;

    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
 
    var digits = "0123456789";
 
    var splChars ="!@#$%&*()";
 
    var ucaseFlag = contains(passcodeValue, uppercase);
 
    var lcaseFlag = contains(passcodeValue, lowercase);
 
    var digitsFlag = contains(passcodeValue, digits);
 
    var splCharsFlag = contains(passcodeValue, splChars);
 
    if(passcodeValue.length>=8 && ucaseFlag && lcaseFlag && digitsFlag && splCharsFlag)
        console.log("good password");
    else {
        alert("Your password is not strong enough. Please include lower and uppercase letters, numbers, and special characters.")
        passcodeInput.value = "";
        return 0;
    }

    if (messageValue.length >= 90) {
        console.log("hi");
        alert("Your message is approaching the maximum character limit.");
    }
    
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