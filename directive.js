myapp.directive('gotBook',function(){
	return{
		restrict:'E',
		template:"<div class='well well-sm' style='background-color:white'>"+"<h4 class='text-center'>Book Name</h4>"+"</div>"+
		"<div>"+
		"<a href='#/books/{{names.name}}'>"+
		"<h4 class='text-center'>{{names.name|uppercase}}</h4>"+"</a>"+"</div>"
		
	}
})
myapp.directive('gotHouse',function(){
	return{
	restrict:'E',
	template:"<div class='well well-sm' style='background-color:white'>"+"<h4 class='text-center'>House Name</h4>"+"</div>"+
	"<div>"+
		"<a href='#/house/{{names.name}}'>"+
		"<h4 class='text-center'>{{names.name|uppercase}}</h4>"+"</a>"+"</div>"
	}
})
myapp.directive('gotCharacter',function(){
	return{
	restrict:'E',
	template:"<div class='well well-sm' style='background-color:white'>"+"<h4 class='text-center'>Character Name</h4>"+"</div>"+
	"<div>"+
		"<a href='#/character/{{names.name}}'>"+
		"<h4 class='text-center'>{{names.name|uppercase}}</h4>"+"</a>"+"</div>"
	}
})


    