const IS_SPEAKING = null;
const IS_DONE_SPEAKING = null;
const IS_PENDING = null;

export const text2Speech = function (text){
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported
        var msg = new SpeechSynthesisUtterance();
        console.log("speak: ", text.text);
        msg.text = text.text;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
       }else{
         // Speech Synthesis Not Supported 
         alert("Sorry, your browser doesn't support text to speech!");
       }
}

