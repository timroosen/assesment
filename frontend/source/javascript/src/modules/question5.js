"use strict";


var steppositionmanger 	= require('../modules/Steppositionmanger.js');


function Question5( element ) {

    element.module = this;

    var images = element.querySelectorAll('.step__image');
    var button = element.querySelector('.js--next-step');

    button.addEventListener('click', nextStep);

    function nextStep(event) {

        if(element.querySelector('input[name=question5]:checked').id == 'question5__4' && element.getElementsByTagName('input')[4].value.length < 4){

            // element.getElementsByTagName('input')[4].classList += ' -error';
            element.getElementsByTagName('input')[4].classList.add('-error');
            return false;

        }else{

            element.getElementsByTagName('input')[4].classList.remove('-error');

        }

        var statusElement = document.querySelectorAll('.status-bar__list-item');
        statusElement[4].querySelector('.status-bar__count').innerHTML = ' ';
        // statusElement[4].classList += ' -done';
        statusElement[4].classList.add('-done');

        steppositionmanger.nextStep();

    }

    this.init = function(){

        for (var i = 0; i<images.length;i++){

            images[i].classList.add('-animation');

        }

    }


    this.init();


}


module.exports = Question5;

