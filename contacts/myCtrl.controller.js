(function () {
    var app = angular.module('myApp');
    app.controller('myCtrl', myCtrl);
    function myCtrl(datafetchservice,$http) {
        
        var self = this;
        self.editMode=false;                
        datafetchservice.datafetch()
            .then(function(response) {
                self.contacts = response;
                
            }
            );
  

    self.selectedContact = function (index) {
        self.selected = index; 
    }
    self.editfunctionality=function()
    {
        self.editMode=!self.editMode;

    }
    self.donefunctionality=function(index)
    {
        self.editMode=!self.editMode;   
        var userdata=self.contacts[self.selected];
        
            $http.put('http://localhost:3000/contacts/'+(self.selected+1),userdata)
            .then(function(data)
            {
                return data;
            }
            );
    }
   
}
})();
