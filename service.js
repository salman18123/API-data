
myapp.service('service',function($http){
	var main=this;
	this.url='https://www.anapioficeandfire.com/api';
	this.gotcharacters=function(){
		return $http.get(main.url+'/characters');
	}
	this.gothouses=function(){
		return $http.get(main.url + '/houses');
	}
	this.gotbooks=function(){
		return $http.get(main.url+'/books');
	}
	this.loadthisbook=function(name){
		return $http.get(main.url +'/books?name='+ name);
	}
	this.loadthishouse=function(name){
		return $http.get(main.url +'/houses?name='+ name);
	}
	this.loadthischaracter=function(name){
		return $http.get(main.url +'/characters?name='+name);
	}
})