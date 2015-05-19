
var app = angular.module('Todo', []);

app.controller('TodoCtrl', function($scope) {

  $scope.todos = [
    {text:'Learn AngularJS', done:true},
    {text:'Build an app', done:false}
  ];
  $scope.addTodo = function(){
    $scope.todos.push({text: $scope.newTodo, done: false});
  }

  $scope.removeCompleted = function(){
    for (var i =0; i < $scope.todos.length; i++){
      if ($scope.todos[i].done){
        $scope.todos.splice(i, 1);
      }
    }

  }
});
