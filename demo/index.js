$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 5){
			$(".sticky").addClass("fixed-top ");
			$(".sticky").addClass("co ");
		}
		else{
			$(".sticky").removeClass("fixed-top ");
			$(".sticky").removeClass("co ");
		}
	});
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	document.getElementById("status").innerHTML = "Hello " + user.displayName;
  	document.getElementById("logout").innerHTML = "Log Out";
    // User is signed in.
  } else {
  	document.getElementById("status").innerHTML = "Register/SignIn";
  	document.getElementById("logout").innerHTML = "";
    // No user is signed in.
  }
});


function logout(){
		firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
}

function event1_registration(){

	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Hackathon");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Hackathon registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event2_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Business_Quiz");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Business_Quiz registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event3_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Video_Advertising_Competition");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Video_Advertising_Competition registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event4_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Game_Of_Thrones");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Game_Of_Thrones registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event5_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Sales_Pitching");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Sales_Pitching registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event6_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Campaging");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Campaging registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event7_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Pitching");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Pitching registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
function event8_registration(){
	
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Binder");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Binder registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}

function workshop_registration(){
	var user = firebase.auth().currentUser;

	if (user!= null){
		var verify = user.emailVerified;
		if(verify){
			var database = firebase.database();
			var ref = database.ref("Workshop");
			var data = {
				name: user.displayName,
				email: user.email
			}
			ref.push(data);
			window.alert("Workshop registration Complete, Please see other events too !!");
		}
		else{
			window.alert("Please, Verify your E-mail");
		}
	}

	else{
		window.alert("First Register");
	}
}
