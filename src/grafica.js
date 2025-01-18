function clearScreen(){
    while (field.firstChild) {
        field.removeChild(field.firstChild);
    }
}

const grafica = {
    home(){
        const sfondoBg = document.createElement("video");
        sfondoBg.src = "video/sfondo.mp4";
        sfondoBg.autoplay = true;
        sfondoBg.loop = true;
        sfondoBg.controls = false;

        field.appendChild(sfondoBg);

        sfondoBg.style.zIndex = "0";
        sfondoBg.style.width = "100%";
        
        const section = document.createElement("div");
        section.classList.add("home");

        const div = document.createElement("div");
        div.classList.add("prova");
        div.style.backgroundColor = "rebeccapurple";
        div.style.width = 160 * 3 + "px";
        div.style.height = 90 * 3 + "px";

        section.appendChild(div);
        field.appendChild(section);

        div.addEventListener("click", ()=>{
            section.style.transform = "scale(8)";
        });
    },

};


const quoteContainer = document.createElement("p");
const quote = document.createElement("p");
const audio = document.createElement("audio");
const sfondoBg = document.createElement("video");
sfondoBg.src = "video/sfondo.mp4";
sfondoBg.autoplay = true;
sfondoBg.loop = true;
sfondoBg.controls = false;
sfondoBg.style.width = "100%";

field.appendChild(sfondoBg);

sfondoBg.style.zIndex = "0";
audio.src = "audio/typing.mp3";
document.body.appendChild(audio);

quoteContainer.classList.add("Platone");
const text = '"La meraviglia è il principio della filosofia, perchè è dal sentirsi stupiti che nasce il desiderio di conoscere"';
console.log(text.length * 50);
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


document.addEventListener("keypress", (event)=>{
    if (event.key === "s"){
        audio.play();
        typeWriter();
        setTimeout(()=>quote.classList.add("Visible"), 5650 * 7/6);
    }
});

quoteContainer.addEventListener("click", ()=>{
    quoteContainer.style.transform = "scale(50) translateZ(1200px)";
    quoteContainer.style.opacity = "0";
    quote.style.transform = "scale(20) translate(1200px, 1200px)";
    quote.style.opacity = "0";
    setTimeout(()=>{clearScreen();setTimeout(()=>{grafica.home()}, 400)}, 800);});