var app = angular.module("myApp", []);
app.controller("myCtrl",myCtrl);
function myCtrl()
{
    this.buttonClicked=function(n)
	{
		this.selectedOperation=n;	
	}
	this.computeResult = function()
	{		
			var num1=parseFloat(this.input1);
	        var num2=parseFloat(this.input2);
			
			if(this.selectedOperation=='+')
			{
				this.result = num1 + num2;
			}
			else if(selectedOperation=='-')
			{
				this.result = num1 - num2;
			}
			else if(selectedOperation=='*')
			{
				this.result = num1 * num2;
			}
			else if(selectedOperation=='/')
			{
				this.result = num1 / num2;
			}
	}
}
