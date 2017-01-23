var TweenMax			= require('gsap/src/minified/TweenMax.min.js');

function Steppositionmanger( ) {

    const stepContainer = document.querySelector('.js--step-manager');
    const arraySteps = document.querySelectorAll('.js--step');

    var ACTIVESTEP = 0;
    var LASTSTEP = 0;
    var ISTWEENING = false;
    var pos;

    window.onresize = resize;

    this.nextStep = function(){
        if(!ISTWEENING) {
            ISTWEENING = true;
            LASTSTEP = ACTIVESTEP;
            ACTIVESTEP++;

            pos = document.querySelector('.m--app').clientWidth;

            TweenMax.to(stepContainer, 0.8, {x: -pos * ACTIVESTEP, ease: Cubic.easeInOut, onStart: initStep, onComplete: toggleTween });
        }
    };


    this.getActiveStep = function(){
        return ACTIVESTEP;
    };

    this.setActiveStep = function(value){
        ACTIVESTEP = value;
    };

    function resize() {

        pos = document.querySelector('.m--app').clientWidth;

        TweenMax.to(stepContainer, 0.8, {x: -pos * ACTIVESTEP, ease: Cubic.easeInOut, onStart: initStep, onComplete: toggleTween });

    }

    function initStep(){
        if(arraySteps[ACTIVESTEP].module != undefined && arraySteps[ACTIVESTEP].module.init != undefined) {

            arraySteps[ACTIVESTEP].module.init();

        }

    }

    function toggleTween(){
        ISTWEENING = false;
    }

}

var steppositionmanger = new Steppositionmanger();
module.exports = steppositionmanger;

