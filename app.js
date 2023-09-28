//model
app = document.getElementById('app')

const bessie = {
    name: "Bessie Blue",
    doing: "Being a dog",
    likes: ["Treats", "Stealing Viktor's glasses", "running around on the beach"]
}

let hintCount = 0;
let hint = ["You catch a glimpse of it's collar tag, but it looks like the letters are mostly washed off", 
"You wonder what Bessie the dog is up to by the ocean by herself..",
"She stares at your bag, but all you have in there is coffee and bananas"]

//view
        updateView();
        function updateView(){
            app.innerHTML = /*HTML*/`
            <div id="headerDiv">Mysterious dog</div>
            <input type="text" id="myInput" value="ask away (lowercase)" onclick="clearValue()">
            <button id="myBtn" onclick="checkText()">Enter</button>
            <h1 id="mainDiv"></h1>
            <p>
            <div id="subDiv"onclick="getHint()"></div>
            `;
        }

//controller
function checkText(){    
    if (input.value.includes("name")){
        mainDiv.innerHTML = bessie.name
        headerDiv.innerHTML = "Perhaps hints can be found by clicking somewhere.."
        subDiv.innerHTML = "Well done!"
    } else if (input.value.includes("do")){
        mainDiv.innerHTML = bessie.doing
        subDiv.innerHTML = "Great job!"
    } else if (input.value.includes("want")){
        mainDiv.innerHTML = bessie.likes
        subDiv.innerHTML = "Bessie the dog runs off into the sunset. You can't wait to go home and enjoy some.. Wait where are my glasses!?"
    } 
    } 

    getHint();
function getHint(){
   if (hintCount == 0){
   document.getElementById('subDiv').innerHTML = hint[0]
  return hintCount ++;
} else if (hintCount == 1){
    document.getElementById('subDiv').innerHTML = hint[1]
   hintCount ++;
} else if (hintCount == 2){
    document.getElementById('subDiv').innerHTML = hint[2]
   hintCount = 0;
}
}

function clearValue(){
    if (input.value == "ask away (lowercase)","name","do","want","like"){
    input.value = "";
}
}
  var input = document.getElementById("myInput");
  input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
}); 

console.log(hintCount)
 