function clearScreen(){
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }
}

const grafica = {

    home(){
        const section = document.createElement("div");
        section.classList.add("home");

        const name = document.createElement("h1");
        name.classList.add("Title");
        name.innerHTML = "PLACEHOLDER";

        const div = document.createElement("div");
        div.classList.add("prova");
        div.style.backgroundColor = "rebeccapurple";
        div.style.width = 160 * 3 + "px";
        div.style.height = 90 * 3 + "px";

        section.appendChild(name);
        section.appendChild(div);
        field.appendChild(section);

        div.addEventListener("click", ()=>{
            div.style.transform = "scale(8)";
        });
    },

};


const quoteContainer = document.createElement("p");
const quote = document.createElement("p");

document.addEventListener('DOMContentLoaded', (event) => {
    quoteContainer.classList.add("Platone");
    const text = '"La meraviglia è il principio della filosofia, perchè è dal sentirsi stupiti che nasce il desiderio di conoscere"';
    const speed = 50; 
    let i = 0;
    quote.classList.add("Aristotele");
    quote.innerHTML = "[Aristotele]";
    

    field.appendChild(quoteContainer);
    field.appendChild(quote);
    function typeWriter() {
        if (i < text.length) {
            quoteContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    setTimeout(()=>quote.classList.add("Visible"), speed*text.length * 7/5);
    });

quoteContainer.addEventListener("click", ()=>{
    quoteContainer.style.transform = "scale(50) translateZ(1200px)";
    quoteContainer.style.opacity = "0";
    quote.style.transform = "scale(20) translate(1200px, 1200px)";
    quote.style.opacity = "0";
    setTimeout(()=>{clearScreen()
        setTimeout(()=>{grafica.home()}, 800);
    }, 800);

});