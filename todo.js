
var app = angular.module('Todo', []);

app.controller('TodoCtrl', function($scope) {
    
    $scope.todos = [
            {text:'Learn AngularJS', done:false},
            {text:'Build an app', done:false}
    ];
});
