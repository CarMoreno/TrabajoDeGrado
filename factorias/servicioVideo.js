var ecolodApp = angular.module('EcolodApp')
ecolodApp.factory('urlService',
    function()
    {
        var serviceUrl = {};

        serviceUrl.url = null;
        
        
        serviceUrl.setUrl = function(urlV)
        {
            serviceUrl.url = urlV;
        };


       serviceUrl.getUrl = function() 
        {
            return serviceUrl.url;
        };

        return serviceUrl;
    }
);