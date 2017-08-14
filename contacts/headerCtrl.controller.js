(function () {
    var app = angular.module('myApp');

app.controller("headerCtrl",headerCtrl);

function headerCtrl(myValueServiceSvc)
{
    var self=this;
	self.title=myValueServiceSvc;
}
})();
