var app = angular.module('myApp', []);
const ACCOUNTNAME = 'YOUR_ACCOUNT_NAME';
const APIKEY = 'YOUR_API_KEY';
const APIPASSWORD = 'YOUR_API_PASSWORD';
const DATABASE = 'DATABASE_TO_ACCESS';


app.controller('tutorialCtrl', function($scope, $http) {
	//Authentication header settings
    var req = {
		method: 'POST',
		url: 'https://'+ACCOUNTNAME+'.cloudant.com/_session',
		headers: {
	   		'Content-Type': 'application/x-www-form-urlencoded'
	 	},
	 	data: 'name='+APIKEY+'&password='+APIPASSWORD,
	 	withCredentials: true
	}
	$http(req).then(function(result){
						//Grab data
						req = {
							method: 'GET',
							url: 'https://'+ACCOUNTNAME+'.cloudant.com/'+DATABASE+'/_all_docs',
	 						withCredentials: true
						}
						
						$http(req).then(function(result){
											$scope.tableData = result.data;
										},
										function(){
											console.log("Failed at grabbing data");
										});

					}, 
					function(){
						console.log('Failed at authenticating');
					}
	);
});
    