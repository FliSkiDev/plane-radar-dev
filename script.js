// fetch('').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// })

// https://airlabs.co/api/v9/flights?api_key=28fa1de5-acf3-4093-9262-ca3c600330e9&bbox=14.0745211117,49.0273953314,24.0299857927,54.8515359564
// ^ Na obszarze polski ^

// https://airlabs.co/api/v9/fleets?airline_iata=${KOD LINI LOTNICZEJ}&api_key=28fa1de5-acf3-4093-9262-ca3c600330e9

const table = document.getElementById("table");
if(window.innerWidth > 1100){

fetch('https://airlabs.co/api/v9/flights?api_key=1a4cec1a-b94e-46b8-9c64-e91e26263917&bbox=49.0273953314,14.0745211117,54.8515359564,24.0299857927').then((response) => {
    return response.json()
}).then((json) => {
    displayFlights(json);
})

function displayFlights(data){
    let status;
    for(let i = 0; i < data['response'].length; i++){
        if(data['response'][i]['status'] !== undefined){
            status = 'W drodze';
        }
        else{
            status = 'Wylądował'
        }
        let content = '';
        content += `<div class="data row">\n`;
        content += `<div class="cell"><img src="https://daisycon.io/images/airline/?width=45&height=45&color=ffffff&iata=${data['response'][i]['airline_iata']}" alt="LOGO"></div>\n`;
        content += `<div class="cell">${data['response'][i]['flight_icao']}</div>\n`;
        content += `<div class="cell">${data['response'][i]['aircraft_icao']}</div>\n`;
        content += `<div class="cell">${data['response'][i]['reg_number']}</div>\n`;
        content += `<div class="cell">${data['response'][i]['dep_icao']}</div>\n`;
        content += `<div class="cell">${data['response'][i]['arr_icao']}</div>\n`;
        content += `<div class="cell">${status}</div>\n`;
        content += `<div class="cell"><a href='https://flightaware.com/live/flight/${data['response'][i]['flight_icao']}' target='_blank'>LINK</a></div>\n`
        content += `</div>`;

        table.innerHTML += content;
    }
}
}
