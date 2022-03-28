const tekstfelt = document.querySelector('#myTextArea');
const button = document.querySelector('#btnKnapp');
const oppgave = document.querySelector('#oppgave');

let oppgavenummer = 1;

btnKnapp.onlick = () =>{
    let innhold = tekstfelt.value;
}
const db = firebase.firestore();
const oppgaver = db.collection("oppgaver");

const hentOppgaver = async () =>{
    let nummer = String(oppgavenummer);
    const svar = await oppgaver.doc(nummer).get();
    lagOppgaverHTML(svar.data());
}
const lagOppgaverHTML = (oppgaver) =>{
    oppgave.innerHTML += `
    <div>${oppgaver.innhold}</div>
    `;

}
button.onclick = () =>{
    oppgavenummer += 1;
    hentOppgaver();
}
hentOppgaver();