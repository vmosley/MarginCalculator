//using load on a particular element is helpful
$(window).unload(function(){
	var c = confirm('Are you sure you want to leave?')
	//unload function cant stop leaving page
	//can be used to remove from people from chatroom list...way above my understanding now.
	if(c){
		return true
		}else {
		return false;
		}
	
	alert('window Loaded');
});