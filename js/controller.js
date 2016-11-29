/**
 * Created by zhuyunliang on 2016/11/26.
 */
var app1=angular.module("myAppCtrl",[]);
app1.controller("discoverCtrl",function($scope){

});
app1.controller("weChatCtrl",function($scope,$ionicPopover){
    $ionicPopover.fromTemplateUrl("popover.html",{
        scope:$scope
    })
        .then(function(popover){
            $scope.popover=popover;
        });
    $scope.openPopover=function($event){
        $scope.popover.show($event);
    };
    $scope.closePopover=function(){
        $scope.popover.hide();
    };
});
app1.controller("mailListCtrl",function($scope){

});
app1.controller("meCtrl",function($scope){

});
