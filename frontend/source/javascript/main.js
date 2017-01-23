"use strict";

var moduleInit 	= require( './src/modules/util/module-init' );

var Question5 = require( './src/modules/question5.js' );
var Question6 = require( './src/modules/question6.js' );
var Form = require( './src/modules/form.js' );



moduleInit( '.js--step-question5', Question5 );
moduleInit( '.js--step-question6', Question6 );
moduleInit( '.js--step-form', Form );


// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        throw new Error('Could not prevent default');
    }
} catch(e) {
    var CustomEvent = function(event, params) {
        var evt, origPrevent;
        params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };

        evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        origPrevent = evt.preventDefault;
        evt.preventDefault = function () {
            origPrevent.call(this);
            try {
                Object.defineProperty(this, 'defaultPrevented', {
                    get: function () {
                        return true;
                    }
                });
            } catch(e) {
                this.defaultPrevented = true;
            }
        };
        return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
}




