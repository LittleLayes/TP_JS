const color = document.getElementById('favcolor');
color.addEventListener('change', (event) => {
var selectedColor = event.target.value;
});
const size = document.getElementById("size");
size.addEventListener("change", (event) => {
var selectedSize = event.target.value;
});
const font_family = document.getElementById("police");
font_family.addEventListener('change', (event) =>{
var selectedFontFamily = event.target.value;
});
const submit = document.querySelector('[type="submit"');
submit.addEventListener('click', change);
function change(){
    alert("start");
    const paragraph = document.querySelector("#paragraph");
    paragraph.style.color = selectedColor;
    paragraph.style.fontSize = selectedSize+"px";
    paragraph.style.fontFamily = selectedFontFamily;
}