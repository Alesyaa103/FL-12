let user = {
  email: 'user@gmail.com',
  password: 'UserPass'
}
let admin = {
  email: 'admin@gmail.com',
  password: 'AdminPass'
}
let current = {};
let lenghtPass = 5;
let lengthNew = 6;
let email = prompt('Please, enter your email');
if (email === admin.email) {
  current = admin;
} else if (email === user.email) {
  current = user;
}
if (!email) {
  alert('Canceled');
} else if (email.length < lenghtPass) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (current.email) {
  let password = prompt('Please, enter you password');
  if(!password) {
    alert('Canceled');
  } else if ( password === current.password) {
    let change = confirm('Do you want to change your password?');
    if (!change) {
      alert('You have failed the change.');
    } else {
      let oldPass = prompt('Please, enter old password');
      if (!oldPass) {
        alert('Canceled');
      } else if (oldPass === current.password){
        let newPass = prompt('Enter a new password');
        if (!newPass) {
          alert('Canceled');
        } else if (newPass.length < lengthNew) {
          alert('It’s too short password. Sorry.');
        } else {
          let validPass = prompt('Please, enter new password again');
          if (newPass === validPass) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}

