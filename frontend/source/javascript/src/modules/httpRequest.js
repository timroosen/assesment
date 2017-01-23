

function HttpRequest(){

    var apiUrl = window.location.href+'api/v1';
    var self = this;
    var callBack;
    this.url;

    if(window.location.hostname == 'localhost'){
        apiUrl = 'http://assesment.dev/api/v1';
    }

    this.request = function(dataObject){
        doRequest(dataObject);
    };

    this.addEventListener = function(callback){
        if (callback !== undefined){
            self.callBack = callback;
            document.addEventListener('complete_event', callback, false);
        }else{
            throw new Error('Callback not a function');
        }
    };

    function doRequest(params){
        call(params).done(function (data) {
            var completeEvent = new CustomEvent('complete_event', {'detail': {'data': data, 'status': 200}});
            completeEvent.initEvent('complete_event', true, true);

            document.dispatchEvent(completeEvent);
            document.removeEventListener('complete_event', self.callBack, false);
            completeEvent = null;

        }).fail(function(jqXHR, textStatus, errorThrown) {
            var completeEvent = new CustomEvent('complete_event', {'detail': {'status': 'error'}});
            completeEvent.initEvent('complete_event', true, true);

            document.dispatchEvent(completeEvent);
            document.removeEventListener('complete_event', self.callBack, false);
            completeEvent = null;
        });
    }

    function call(params){
        this.url = apiUrl + params.url;

        if(params.type == 'get'){
            delete params.type;
            delete params.url;
            return $.get(this.url, params);
        }else{
            delete params.url;
            return $.ajax(this.url, params);
        }
    }
}

var httpRequest = new HttpRequest();
module.exports = httpRequest;