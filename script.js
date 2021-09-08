// API Key NASA
let key = "BSrNrFfi6oeF8CToW9wqHYUh1VIQeAAbQTgdzp5t";

// Establish variable for the location of "ISS" flexbox.
var issFlexBox = document.body.querySelector('#issFlexBox');
console.log(issFlexBox);

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