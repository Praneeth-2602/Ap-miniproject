function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Error: username and password are required.');
        return false;
    }

    if (password.length < 8) {
        alert('Error: Password must contain at least eight characters!');
        return false;
    }

    return true;
}

let isSignedUp = false;

async function sendCredentials(username, password) {
    try {
      // Ensure that username and currentScore are defined
      if (!username || !password) {
        console.error('Error: username and password are required.');
        return;
      }
  
      const response = await fetch('http://localhost:3000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      if(data.success){
        console.log('User created successfully');
        isSignedUp = true;
      }
    } catch (error) {
      console.error('Error:', error);
    }

    if(isSignedUp){
      swal({
        title: "Sign Up Successful! Please login to continue",
        icon: "success",
        button: "OK",
      }).then(() => {
        window.location.href = '/login';
      }
      );
    }
  }

async function verifyLoginCredentials(username, password){
    try {
        const response = await fetch('http://localhost:3000/api/verifylogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        if(data.success){
            isLoggedIn = true;
            console.log('Login successful');
        }else{
            console.log('Incorrect username or password');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    if(isLoggedIn){
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', true);
      swal({
        title: "Login Successful!",
        icon: "success",
        button: "OK",
      }).then(() => {
        window.location.href = '/';
      }
      );
    }
}

async function handleSignup(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!username || !email || !password) {
    console.error('Error: username, email, and password are required.');
    return;
  }
  sendCredentials(username, password);
}

let isLoggedIn = false;

async function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById('name').value;
  const password = document.getElementById('passkey').value;

  if (!username || !password) {
    console.error('Error: username and password are required.');
    return;
  }

  verifyLoginCredentials(username, password);
}