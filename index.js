let bulbImgEl = document.getElementById("bulbImg");
let offbuttonEl = document.getElementById("offbtn");
let onbuttonEl = document.getElementById("onbtn");

function onClickChangeOn(){

    bulbImgEl.src="on.png";
    offbuttonEl.style.backgroundColor = "grey";
    onbuttonEl.style.backgroundColor = "green"; 
}

function onClickChangeOff(){

    bulbImgEl.src="off.png";
    offbuttonEl.style.backgroundColor = "red";
    onbuttonEl.style.backgroundColor = "grey"; 

}