// API Key NASA
let key = "BSrNrFfi6oeF8CToW9wqHYUh1VIQeAAbQTgdzp5t";

// Establish variable for the location of "ISS" flexbox.
var issFlexBox = document.body.querySelector('#issFlexBox');
console.log(issFlexBox);

//Leaflet

// Fetch WhereIsTheISS API

fetch('https://api.wheretheiss.at/v1/satellites/25544/tles', {
        // method: "POST",
        // body: {}
    })
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(_error => console.log('ERROR')) // _error*


const url_ISS = 'https://api.wheretheiss.at/v1/satellites/25544';

async function GetISS() {
    const response = await fetch(url_ISS);
    const data = await response.json();
    // console.log(data);
    const {
        latitude,
        longitude
    } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;

    console.log(latitude)
    console.log(longitude)
}
GetISS();

const mymap = L.map('mapid').setView([51.505, -0.09], 13);