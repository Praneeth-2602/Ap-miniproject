// Check if localStorage.isLoggedIn is truthy
if (localStorage.isLoggedIn == 'true') {
    // If it has a value, hide login and signup buttons
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    
    // Show signout button
    document.getElementById('signout').style.display = 'inline';
}
else if (localStorage.isLoggedIn == 'false'){
    // Show the login and signup buttons
    document.getElementById('login').style.display = 'inline';
    document.getElementById('signup').style.display = 'inline';
    
    // Hide the signout button
    document.getElementById('signout').style.display = 'none';
}

// Function to handle signout
function handleSignout() {
    // Set isLoggedIn to false in localStorage
    localStorage.isLoggedIn = false;
    localStorage.removeItem('username');
}