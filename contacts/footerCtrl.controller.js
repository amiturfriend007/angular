(function () {
    var app = angular.module('myApp');
    app.controller("footerCtrl", footerCtrl);

    function footerCtrl(myValueServiceSvc) 
    {
        var self = this;
        self.title = myValueServiceSvc+ " Amit";
    }
})();