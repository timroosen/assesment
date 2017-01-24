"use strict";

var steppositionmanger 	        = require('../modules/Steppositionmanger.js');

function Question6( element ) {

    element.module = this;

    var statusElement = document.querySelectorAll('.status-bar__list-item');
    var images = element.querySelectorAll('.step__image');
    var button = element.querySelector('.js--next-step');

    button.addEventListener('click', nextStep);

    function nextStep(event) {

        if(element.querySelector('input[name=question6]:checked').id == 'question6__4' && element.getElementsByTagName('input')[4].value.length < 4){

            element.getElementsByTagName('input')[4].classList.add('-error');
            return false;

        }else{

            element.getElementsByTagName('input')[4].classList.remove('-error');

        }

        statusElement[5].querySelector('.status-bar__count').innerHTML = ' ';
        statusElement[5].classList.add('-done');

        steppositionmanger.nextStep();

    }

    this.init = function(){

        statusElement = document.querySelectorAll('.status-bar__list-item');
        statusElement[5].classList.remove('-next');

        for (var i = 0; i<images.length;i++){

            images[i].classList.add('-animation');

        }


    }

}


module.exports = Question6;

