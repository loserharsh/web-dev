const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];
const msg = ["."];

const terminal = document.getElementById("terminal");

function addMessage(message) {
    const line = document.createElement("div");
    line.textContent = message;
    terminal.appendChild(line);
}
function addmage(msg){
    const line = document.createElement("div");
    line.textContent = msg;
    terminal.appendChild(line);
}
async function startHacking() {
    for (const message of messages) {

        // random delay between 1 and 7 seconds
        const delay = Math.floor(Math.random() * 3 + 1) * 1000;

        await new Promise(resolve => setTimeout(resolve, delay));
        addMessage(message + msg[0]);
    }
}

startHacking();