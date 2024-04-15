function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        console.error('Error: username and password are required.');
        return false;
    }

    return true;
}

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
    } catch (error) {
      console.error('Error:', error);
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
    } catch (error) {
        console.error('Error:', error);
    }
}

function handleSignup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        console.error('Error: username and password are required.');
        return;
    }
    console.log(username, password);

    sendCredentials(username, password).then(() => {
      window.location.href = '/login';
    });
}

function handleLogin() {
  const username = document.getElementById('name').value;
  const password = document.getElementById('passkey').value;

  if (!username || !password) {
    console.error('Error: username and password are required.');
    return;
  }
  console.log(username, password);

  verifyLoginCredentials(username, password)
    .then(() => {
      // Store username and password in local storage
      localStorage.setItem('username', username);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

