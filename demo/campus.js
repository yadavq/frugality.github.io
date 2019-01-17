function login_func(){
	document.getElementById("registration").style.display = "none";
	document.getElementById("login").style.display = "block";

}

function register_fun(){
	document.getElementById("login").style.display = "none";
	document.getElementById("registration").style.display = "block";
}

function login(){

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
});
document.getElementById("goback1").innerHTML = "You Are Now Logged In !! Please Verify Your E-mail if you have not, before Event Registration, Click here to register for events";

}

function create(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var name = document.getElementById("name").value;
	var college = document.getElementById("college").value;
	var phone = document.getElementById("phone").value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
	}).then(function verification(){
			var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
		  window.alert("Verification Sent, Please Verify Your E-mail");
		}).catch(function(error) {
		  console.log(error);
		});


		console.log(name);
		user.updateProfile({
		  displayName: name
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});


		console.log(college + email);
		var database = firebase.database();
		var ref = database.ref("college");
		var detail = {
			name: user.displayName,
			email: user.email,
			college: college,
			phone: phone
		}
		ref.push(detail);



	});

	document.getElementById("goback").innerHTML = "Your Registration is Complete !! Please Verify Your E-mail before Event Registration, Click here to register for events";

}
