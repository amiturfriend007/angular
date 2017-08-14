(function() {

    var app = angular.module('myApp');

    app.service("datafetchservice", function ($http) {
        var self = this;
        self.datafetch=function()
        {
            var promise1=$http.get("http://localhost:3000/contacts");
            var promise2=promise1.then(function (response) {
               return response.data;
               
        });
            return promise2;
        }
        console.log(self.datafetch());
    });
})();
