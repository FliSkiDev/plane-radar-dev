const title = document.querySelector("title");
let switched = false;

function switchTitle(){
    if(switched === false){
        title.innerHTML = 'Aktualne loty na terenie polski';
    }
    else{
        title.innerHTML = 'PlaneRadar | Wersja Developerska';
    }
    switched = !switched
    setTimeout(() => {
        switchTitle();
    }, 2000);
}

switchTitle();