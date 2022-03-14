let sideId = 0;
let ordet = svar[sideId].svaret;
const btnSjekkKode = document.querySelector('#btnSjekkKode');

const svar = [
    {
        svaret: høy,
        sideId: 0,
    }, 
    {
        svaret: høy,
        sideId: 1,
    },
    {
        svaret: høy,
        sideId: 2,
    }, 
    {
        svaret: høy,
        sideId: 3,
    },
    {
        svaret: høy,
        sideId: 4,
    }, 
    {
        svaret: høy,
        sideId: 5,
    },
]


const sjekkKode = () => {
    if(inpSvar.toLowerCase() == svar[sideId].svaret){
        svarDiv.innerHTML = ``;
        svar[sideID].sideId = svar[sideID].sideId + 1;

    } else {
        svarDiv.innerHTML = ``;
    }
}

btnSjekkKode.onclick = sjekkKode;