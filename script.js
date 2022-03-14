let sideId = 0;
let ordet = svar[sideId].svaret;
const btnSjekkKode = document.querySelector('#btnSjekkKode');

const svar = [
    {
        svaret: "høy",
    }, 
    {
        svaret: "høy",
    },
    {
        svaret: "høy",
    }, 
    {
        svaret: "høy",
    },
    {
        svaret: "høy",
    }, 
    {
        svaret: "høy",
    },
]

const sjekkKode = () => {
    if(inpSvar.toLowerCase() == svar[sideId].svaret){
        svarDiv.innerHTML = ``;
        sideId = sideId + 1;

    } else {
        svarDiv.innerHTML = ``;
    }
}

btnSjekkKode.onclick = sjekkKode;