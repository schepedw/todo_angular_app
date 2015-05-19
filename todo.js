
var app = angular.module('Todo', []);

app.controller('TodoCtrl', function($scope) {
    
    $scope.todos = [
            {text:'Learn AngularJS', done:false},
            {text:'Build an app', done:false}
    ];

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.TodoText, done:false});
        $scope.TodoText = '';
    };
});
