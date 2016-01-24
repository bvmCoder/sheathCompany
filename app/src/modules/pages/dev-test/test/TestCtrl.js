'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', '$q', function ($scope, $timeout, appHttp, UserModel, $location, $q) {

    $scope.myVar = 'Value One';
    $scope.user = UserModel.load();

    $scope.swipeIt = function (evt, direction, params) {
        console.log('swipe: ' + direction);
    };

    $scope.tapIt = function (evt, params) {
        console.log('tap');
    };

    function sync(var1) {
        console.log('sync');
        return var1;
    }
    /*var syncRet = sync(5);
    console.log(syncRet);
    
    function asyncFunc(var1, callback) {
        $timeout(function() {
            console.log('Timeout Finished');
            callback();
        }, 2000);
        console.log('Timeout Started');
    }
    
    asyncFunc(5, function(){
        console.log('async Done');
    });
    console.log('Next Line');
    

    function asyncFuncPromise(var1) {
        var deferred = $q.defer();
        $timeout(function () {
            console.log('Promise Timeout finished');
            deferred.resolve();
        }, 2000);
        console.log('Promise Timeout Started');
        return deferred.promise;
    }

    asyncFuncPromise(5)
        .then(function () {
            console.log('Async Promise Done');
        });
    */
    $scope.on('myEvt', function (evt, params) {
        console.log('on My Event');
        
    });
    
    $scope.$broadcast('myEvt', {});
    
    $timeout(function() {
        $scope.$broadcast('myEvt', {});
    }, 1000);
    
}]);