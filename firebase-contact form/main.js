 // Initialize Firebase Database
   var production_config = {
      apiKey: "AIzaSyCCezcs4ErslTo9uykG4ZPWeV1UxESVkec",
      authDomain: "azania-cloud.firebaseapp.com",
      databaseURL: "https://azania-cloud.firebaseio.com",
      projectId: "azania-cloud",
      storageBucket: "azania-cloud.appspot.com",
      messagingSenderId: "933439480573"
    };
 

 //messages reference collections
 var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values from user input feilds
  var lastname = getInputVal('lastname');
  var firstname = getInputVal('firstname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var bday = getInputVal('bday');
  var address = getInputVal('address');
  var ercontact = getInputVal('ercontact');
  var relationship = getInputVal('relationship');
  var primarydr = getInputVal('primarydr');
  var referringdr = getInputVal('referringdr');

  // Save message
  saveMessage(firstname, lastname, email, phone, message, bday, address, ercontact, relationship, primarydr, referringdr);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },8000);

  // Clear form
  document.getElementById('contactform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
//patient input fields
function saveMessage(firstname, lastname, email, phone, message, bday, address, ercontact, relationship, primarydr, referringdr){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname:lastname,
    email:email,
    phone:phone,
    message:message,
    bday:bday,
    address:address,
    ercontact: ercontact,
    relationship: relationship,
    primarydr: primarydr,
    referringdr:referringdr
  });
}
