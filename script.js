const btnSjekkKode = document.querySelector('#btnSjekkKode');
const videreDiv = document.querySelector('#videreDiv');
const svarDiv = document.querySelector('#svarDiv');
const inpSvar = document.querySelector('#inpSvar');

const svar = [
    {
        svaret: "høy",
        svarTekst: "Dere bytter ut bokstavene med tallet som angir bokstavens plassering i alfabetet (A=1, B=2 osv.). H gir 8, Ø gir 28 og Y gir 25. Dere stiller inn kodelåsen på 82825 og kodelåsen spretter opp! ",
        svarTekstFeil: "Dere bytter ut bokstavene med tallet som angir bokstavens plassering i alfabetet (A=1, B=2 osv.), men kodelåsen lar seg ikke åpne. Dere har feil kode!",
    }, 
    {
        svaret: "var",
        svarTekst: "Dere taster inn kodeordet VAR på panelet ved døren. Et LED-lys skifter til grønt og døren åpner seg automatisk!  ",
        svarTekstFeil: "Dere taster inn løsningsordet på panelet ved døren, men det lyser rødt og døren åpner seg ikke. Dere har feil kodeord! ",
    },
    {
        svaret: "meter",
        svarTekst: "Dere vrir kodelåsen slik at løsningordet METER synes. Låsen åpner seg og dere kan gå videre.  ",
        svarTekstFeil: "Dere stiller inn kodelåsen med løsningsordet, men det skjer ingenting. Låsen åpner seg ikke, koden dere har funnet ut er feil!",
    }, 
    {
        svaret: "230",
        svarTekst: "«230?» sa den ene turisten, «det er jo lengden på sidekantene i pyramiden. Det må jo være riktig!» Dere stilte inn kodelåsen på 230 og låsen åpnet seg! Dere bøyde dere ned og passerte gjennom den lave døren i murveggen. ",
        svarTekstFeil: "Dere stiller inn kodelåsen med tallet, men det skjer ingenting. Låsen åpner seg ikke, koden dere har funnet ut er feil!",
    },
    {
        svaret: "bred",
        svarTekst: "Dere vrir kodelåsen slik at bokstavene viser BRED og låsen åpner seg! ",
        svarTekstFeil: "Dere stiller inn kodelåsen med løsningsordet, men det skjer ingenting. Låsen åpner seg ikke, koden dere har funnet ut er feil!",
    }, 
    {
        svaret: "og",
        svarTekst: "Dere vrir kodelåsen slik at bokstavene viser OG og låsen åpner seg! Dere går forsiktig, nesten motvillig inn i den trange passasjen som tar dere videre. ",
        svarTekstFeil: "Dere stiller inn kodelåsen med de to bokstavene, men det skjer ingenting. Låsen åpner seg ikke, koden dere har funnet ut er feil! ",
    },
]

const url = new URL(window.location.href);
console.log(url);
const idTilSide = url.searchParams.get("id");
let sideId;
if (!idTilSide){
    sideId = 0;
} else {
    sideId = Number(idTilSide);
}
console.log(sideId);
//let sideId = 0;
let index = sideId + ".html";

const sjekkKode = () => {
    if(inpSvar.value.toLowerCase() == svar[sideId].svaret){
        if(sideId >= 5){
            svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
            sideId = 0;
            index = 0 + ".html";
            videreDiv.innerHTML = `<a class="linkVidere" href="vunnet.html">Du fullførte escaperoomet! Gå videre til premiesiden ved å trykke her.<a>`;
            videreDiv.style.backgroundColor = "rgb(111, 179, 111)";
        }else{
            svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
            sideId = sideId + 1;
            index = sideId + ".html";
            videreDiv.innerHTML = `<a class="linkVidere" href='${index}?id=${sideId}'>Du greide det! Gå videre til neste rom ved å trykke her.<a>`;
            videreDiv.style.backgroundColor = "rgb(111, 179, 111)";
        }
    } else {
        svarDiv.innerHTML = `${svar[sideId].svarTekstFeil}`;
        videreDiv.innerHTML = `<a class="linkVidere" href='${index}?id=${sideId}'>Du greide det dessverre ikke, men trykk her for å prøve på nytt.<a>`;
        videreDiv.style.backgroundColor = "rgb(197, 73, 73)";
    }
}

btnSjekkKode.onclick = sjekkKode;
