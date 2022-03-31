const tekstfelt = document.querySelector('#myTextArea');
const button = document.querySelector('#btnSjekkKode');
const oppgave = document.querySelector('#oppgave');
const inpSvar = document.querySelector('#inpSvar');
const svarDiv = document.querySelector('#svarDiv');

let oppgavenummer = 1;
let riktig = ``;

const db = firebase.firestore();
const oppgaver = db.collection("oppgaver");

const hentOppgaver = async () =>{
    let nummer = String(oppgavenummer);
    const svar = await oppgaver.doc(nummer).get();
    lagOppgaverHTML(svar.data());
}
const lagOppgaverHTML = (oppgaver) =>{
    riktig = oppgaver.riktig;
    oppgave.innerHTML = `
    <div>${oppgaver.innhold}</div>
    `;

}
// button.onclick = () =>{

//     if(inpSvar.value === riktig){
//         oppgavenummer += 1;
//         hentOppgaver();
//     }
// }
const sjekkKode = () => {
    if(inpSvar.value.toLowerCase() == riktig){
        // if(sideId >= 5){
        //     svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
        //     sideId = 0;
        //     index = 0 + ".html";
        //     videreDiv.innerHTML = `<a class="linkVidere" href="vunnet.html">Du fullførte escaperoomet! Gå videre til premiesiden ved å trykke her.<a>`;
        //     videreDiv.style.backgroundColor = "rgb(111, 179, 111)";
        // }else{
        //     svarDiv.innerHTML = `${svar[sideId].svarTekst}`;
        //     sideId = sideId + 1;
        //     index = sideId + ".html";
        //     videreDiv.innerHTML = `<a class="linkVidere" href='${index}?id=${sideId}'>Du greide det! Gå videre til neste rom ved å trykke her.<a>`;
        //     videreDiv.style.backgroundColor = "rgb(111, 179, 111)";
        // }
        oppgavenummer += 1;
        hentOppgaver();
    } else {
        // svarDiv.innerHTML = `${svar[sideId].svarTekstFeil}`;
        // videreDiv.innerHTML = `<a class="linkVidere" href='${index}?id=${sideId}'>Du greide det dessverre ikke, men trykk her for å prøve på nytt.<a>`;
        // videreDiv.style.backgroundColor = "rgb(197, 73, 73)";
        svarDiv.innerHTML = `Feil, prøv på nytt`;
    }
}

button.onclick = sjekkKode;

hentOppgaver();