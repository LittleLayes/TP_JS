function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const list = document.querySelectorAll("ol li");
list.forEach(element => {
    element.addEventListener('click', (event) =>{
        let color = "color: " + getRandomColor() + ";";
        event.target.style = color;
    })
});