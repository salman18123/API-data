var myapp=angular.module('gotapp',['ngRoute']);
myapp.controller('gotcontroller',['service',function(service){
	var main=this;
	this.houses=[];
	this.books=[];
	this.characters=[];
	this.all=[];
	this.alldata=[];
	this.getmeall=function(){
		service.gotbooks().then(function successcallback(response){
			
			main.books=response.data;
			
			main.all=main.all.concat(main.books);
			console.log(main.all);
			for(i=0;i<main.books.length;i++){
				main.books[i].status='book';
			}
			


		},function errorcallback(response){
			alert("check the console");
		}
		)
		service.gotcharacters().then(function successcallback(response){
			
			main.characters=response.data;
			
			main.all=main.all.concat(main.characters);
			console.log(main.all);
			for(i=0;i<main.characters.length;i++){
				main.characters[i].status='character';
			}

		},
		function errorcallback(response){
			alert("check your console");
		})
		service.gothouses().then(function successcallback(response){
			
			main.houses=response.data;
			
			main.all=main.all.concat(main.houses);
			main.alldata=main.all;
			console.log(main.all);
			for(i=0;i<main.houses.length;i++){
				main.houses[i].status='house';
			}
			
		},function errorcallback(response){
			alert("check the console");
		})
	}
	this.getmeall();
	

}])
myapp.controller('bookcontroller',['$routeParams','service',function($routeParams,service){
	var main=this;
	this.name=$routeParams.name;
	console.log(this.name);
	this.loadthebook=function(){
		service.loadthisbook(main.name).then(function successcallback(response){
			console.log(response);
			main.bookinfo=response.data[0];
			console.log(main.bookinfo);
		},
		function errorcallback(response){
			alert("check the console");

		}
		)
	}
	this.loadthebook();
}])
myapp.controller('housecontroller',['$routeParams','service',function($routeParams,service){
	var main=this;
	this.data=$routeParams.name;
	console.log(this.data);
	this.loadthehouse=function(){
		service.loadthishouse(main.data).then(function successcallback(response){
			console.log(response);
			main.houseinfo=response.data[0];
			console.log(main.houseinfo);
		},function errorcallback(response){
			alert("check the console");
		}
		)
	}
	this.loadthehouse();
}])
myapp.controller('charactercontroller',['$routeParams','service',function($routeParams,service){
	var main=this;
	this.data=$routeParams.name;
	console.log(this.data);
	this.loadthecharacter=function(){
		service.loadthischaracter(main.data).then(function successcallback(response){
			console.log(response);
			main.charinfo=response.data[0];
			console.log(main.charinfo);
		},function errorcallback(response){
			alert("check the console");
		}
		)
	}
	this.loadthecharacter();
}])