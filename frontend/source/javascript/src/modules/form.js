"use strict";

var httpRequest 	            = require('../modules/HttpRequest.js');


function Form( element ) {

    var element = element;

    element.module = this;

    var images = element.querySelectorAll('.step__image');
    var button = element.querySelector('.js--next-step');

    var question5 = document.querySelector('.-question5');
    var question6 = document.querySelector('.-question6');

    button.addEventListener('click', validateForm);

    this.init = function(){

        var statusBar = document.querySelector('.m--status-bar');
        // statusBar.classList += ' -hide';
        statusBar.classList.add('-hide');


        for (var i = 0; i<images.length;i++){

            // images[i].classList += ' -animation';
            images[i].classList.add('-animation');

        }

    };

    function validateForm(){

        var validated = true;

        if(element.querySelector('input[name=name]').value.length < 2){

            // element.querySelector('input[name=name]').classList += ' -error';
            element.querySelector('input[name=name]').classList.add('-error');
            validated = false;
        }else{

            element.querySelector('input[name=name]').classList.remove('-error');

        }

        if(!validateEmail(element.querySelector('input[name=email]').value)){

            // element.querySelector('input[name=email]').classList += ' -error';
            element.querySelector('input[name=email]').classList.add('-error');
            validated =  false;

        }else{

            element.querySelector('input[name=email]').classList.remove('-error');

        }


        if(validated){

            sendData();

        }
    }

    function sendData() {

        button.style.display = 'none';

        var data = {};
            data.name = document.getElementsByName('name')[0].value;
            data.email = document.getElementsByName('email')[0].value;
            data.question5 = document.querySelector('input[name=question5]:checked').value+' '+question5.getElementsByTagName('input')[4].value;
            data.question6 = document.querySelector('input[name=question6]:checked').value+' '+question6.getElementsByTagName('input')[4].value;

        var params = {};
            params.type ='post';
            params.url = '/saveuser';

            params.data = JSON.stringify(data);
            params.dataType = 'json';
            params.contentType = 'application/json';

        httpRequest.addEventListener(element.module.dataSaved);
        httpRequest.request(params);

    }

    function validateEmail(val){
        var regExp = /^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return regExp.test(val);
    }


    this.dataSaved = function(event){

        var formSuccess = element.querySelector('.data-saved');
        var formIntro = element.querySelector('.-form');
        var form = element.querySelector('#user-details');
        var discalimer = element.querySelector('.step__disclaimer');

        if(event.detail.status == 'error'){

            button.style.display = 'block';
            formIntro.innerHTML = 'Oeps er ging iets mis... probeer het opnieuw';

            return false;
        }

        formIntro.style.display = 'none';
        form.style.display = 'none';
        button.style.display = 'none';
        discalimer.style.display = 'none';

        formSuccess.style.display = 'block';

    };

}


module.exports = Form;

