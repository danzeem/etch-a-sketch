const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "480px";

const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";

function getRandomHexColor() {
    // Generate a random number up to 0xFFFFFF (16777215)
    // Convert it to a hexadecimal string (base 16)
    // padStart ensures the string is always 6 characters long by adding leading zeros
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

for (let i = 0; i < 256; i++) {
    var div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.background = "blue";
    div.style.color = "white";
    
 
    document.getElementById("container").appendChild(div);
}
document.querySelectorAll('#container div').forEach(d => {
       d.addEventListener('mouseenter', () => {
           d.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
       });
   });

 
function promptMe(){
    var numGrid = prompt("Suggest a new grid (Maximum 100x100): ");
    document.querySelectorAll('#container div').forEach(d => {
       d.remove();
   });
   for (let i = 0; i < numGrid; i++) {
        var div = document.createElement("div");
        div.style.width = "30px";
        div.style.height = "30px";
        div.style.background = "blue";
        div.style.color = "white";
    
 
        document.getElementById("container").appendChild(div);
    }
    document.querySelectorAll('#container div').forEach(d => {
       d.addEventListener('mouseenter', () => {
           d.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
       });
   });

}