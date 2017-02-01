app.controller("ChatController" , function($scope, ChatService,$rootScope) {
	$scope.messages = [];
    $scope.message = "";
    $scope.max = 140;
    console.log("dddddddddddddddd"+$rootScope.currentUser.role)
    $scope.addMessage = function() {
    	console.log("addMessage")
    	alert("message test")
    ChatService.send($rootScope.currentUser.id+","+$scope.message);
    	$scope.message = "";
    };
    
    ChatService.recieve().then(null , null, function(message) {
         console.log("recieve") 
         
       $scope.messages.push(message);  
    });
}); 