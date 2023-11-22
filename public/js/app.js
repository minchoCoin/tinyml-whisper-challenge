const startBtn = document.getElementById("startButton");
const bluetoothBtn = document.getElementById("bluetoothButton");
const recordButton = document.getElementById("recordButton");
const recordText = document.getElementById("recordText")

let isStartSpeaking = false;

startBtn.addEventListener("click", () => {
    bluetoothBtn.style.visibility = "visible";
    startBtn.style.display = "none";
});

bluetoothBtn.addEventListener("click", () => {
    recordButton.style.visibility = "visible";
    recordText.style.visibility = "visible";
    bluetoothBtn.style.display = "none";
});

recordButton.addEventListener("click", () => {
    timerTotal.style.visibility = "visible";
    recordButton.style.display = "none";
    recordText.style.display = "none";
    recordCompleteText.style.display = "none";
    relayButton.style.display = "none";
});


// TODO 녹음완료이벤트리스너가
//     recordCompleteText.style.visibility = "visible";
//     relayButton.style.visibility = "visible";






