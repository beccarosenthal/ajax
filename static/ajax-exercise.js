"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', function (results) {
        console.log(results); //for debugging purposes
        $('#fortune-text').html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function weatherDisplay(results) {
    $('#weather-info').html(results.forecast);
    console.log(results);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, weatherDisplay);
    
}
//submit not click because #weather-form is the form, not the button
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


