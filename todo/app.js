var app=angular.module('myApp',[]);
app.controller('myCtrl',myCtrl);
function myCtrl()
{
    this.editable=false;
    
    this.todo=
    ["Todo 1",
        "Todo 2",
        "Todo 3"
    ];
    this.addOperation= function()
    {
        this.todo.push(this.addtext);   
    }
    this.editOperation=function()
    {
            this.editable=true;
    }
    this.doneOperation=function()
    {
         this.editable=false;
    }
    this.deleteOperation=function($index)
    {
        this.todo.splice($index,1);
    }
} 

