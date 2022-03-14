let sideId = 0;
let index = 0 + ".html";
let ordet = svar[sideId].svaret;
const btnSjekkKode = document.querySelector('#btnSjekkKode');
const videreDiv = document.querySelector('#videreDiv');
const svarDiv = document.querySelector('#svarDiv');

const svar = [
    {
        svaret: "høy",
        svarTekst: "Dere bytter ut bokstavene med tallet som angir bokstavens plassering i alfabetet (A=1, B=2 osv.). H gir 8, Ø gir 28 og Y gir 25. Dere stiller inn kodelåsen på 82825 og kodelåsen spretter opp! ",
    }, 
    {
        svaret: "var",
        svarTekst: "Dere taster inn kodeordet VAR på panelet ved døren. Et LED-lys skifter til grønt og døren åpner seg automatisk!  ",
    },
    {
        svaret: "meter",
        svarTekst: "Dere vrir kodelåsen slik at løsningordet METER synes. Låsen åpner seg og dere kan gå videre.  ",
    }, 
    {
        svaret: "230",
        svarTekst: "«230?» sa den ene turisten, «det er jo lengden på sidekantene i pyramiden. Det må jo være riktig!» Dere stilte inn kodelåsen på 230 og låsen åpnet seg! Dere bøyde dere ned og passerte gjennom den lave døren i murveggen. ",
    },
    {
        svaret: "bred",
        svarTekst: "Dere vrir kodelåsen slik at bokstavene viser BRED og låsen åpner seg! ",
    }, 
    {
        svaret: "og",
        svarTekst: "Dere vrir kodelåsen slik at bokstavene viser OG og låsen åpner seg! Dere går forsiktig, nesten motvillig inn i den trange passasjen som tar dere videre. ",
    },
]

const sjekkKode = () => {
    if(inpSvar.toLowerCase() == svar[sideId].svaret){
        if(sideId >= 5){
            svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
            sideId = 0;
            index = 0 + ".html";
            videreDiv.innerHTML = `<a class="linkVidere" herf="index.html">Du fullførte escaperoomet! Gå videre til hovedsiden ved å trykke her.<a>`;
        }else{
            svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
            sideId = sideId + 1;
            index = index + 1 + ".html";
            videreDiv.innerHTML = `<a class="linkVidere" herf=${index}>Du greide det! Gå videre til neste rom ved å trykke her.<a>`;
        }
    } else {
        svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
        videreDiv.innerHTML = `<a class="linkVidere" herf=${index}>Du greide det dessverre ikke, men trykk her for å prøve på nytt.<a>`;
    }
}

btnSjekkKode.onclick = sjekkKode;
