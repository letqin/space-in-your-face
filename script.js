// API Key NASA
let key = "BSrNrFfi6oeF8CToW9wqHYUh1VIQeAAbQTgdzp5t";


// Establish variable for the location of "ISS" flexbox.
var issFlexBox = document.body.querySelector('#issFlexBox');
// console.log(issFlexBox);

//Leaflet


// Fetch WhereIsTheISS API

fetch('https://api.wheretheiss.at/v1/satellites/25544', {
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

//Copyright for 'OpenStreetMap DO NOT REMOVE
const copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const streetmapCopyright = document.querySelector('#streetmapCopyright');
// console.log(streetmapCopyright);
streetmapCopyright.innerHTML = copyright;

//LeafLet map
const mymap = L.map('mapid').setView([0, 0], 1);
// Tiles to build map on LeafLet
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, {
    copyright
});
tiles.addTo(mymap);


// use ISS icon on map
const issIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

// map marker
const marker = L.marker([0, 0], {
    icon: issIcon
}).addTo(mymap);

// ISS api link
const url_ISS = 'https://api.wheretheiss.at/v1/satellites/25544';


async function GetISS() {
    const response = await fetch(url_ISS);
    const data = await response.json();
    // console.log(data);
    const {
        latitude,
        longitude
    } = data;

    marker.setLatLng([latitude, longitude]);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;

    // console.log(latitude)
    // console.log(longitude)
}
GetISS();

const nasa_url = "https://api.nasa.gov/planetary/apod?api_key=BSrNrFfi6oeF8CToW9wqHYUh1VIQeAAbQTgdzp5t";

fetch('https://api.nasa.gov/planetary/apod?api_key=BSrNrFfi6oeF8CToW9wqHYUh1VIQeAAbQTgdzp5t', {
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

function imageOfTheDay() {
    loadJSON(nasa_url, gotData)
};
// const imod;
async function gotData() {
    const response = await fetch(nasa_url);
    let data = await response.json();
    // console.log(data.copyright);
    // console.log(data.hdurl)
    const {
        copyright,
        hdurl,
        url
    } = data;
    document.querySelector(".imod").src = hdurl;
    let imageInsert = document.querySelector(".imod").src = hdurl;
    if (imageInsert = 'undefined') {
        document.querySelector(".imod").src = url;
    }

    let copyrights = document.querySelector("#copyrights");
    copyrights.textContent = '©' + copyright;


    // ©
    // document.getElementsByClassName("imod");
    // console.log(copyright);
    // console.log(hdurl);

    // imod = data;
};
gotData();

// Check media type 

// if picture media display hdurl(picture)

// else display video(or other media)


// Disable scrolling in interactive box window