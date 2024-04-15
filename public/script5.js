// Check if localStorage.isLoggedIn is truthy
if (localStorage.isLoggedIn == 'true') {
    // If it has a value, hide login and signup buttons
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    
    // Show signout button
    document.getElementById('signout').style.display = 'contents';
}
else if (localStorage.isLoggedIn == 'false'){
    // Show the login and signup buttons
    document.getElementById('login').style.display = 'contents';
    document.getElementById('signup').style.display = 'contents';
    
    // Hide the signout button
    document.getElementById('signout').style.display = 'none';
}

// Function to handle signout
function handleSignout() {
    // Set isLoggedIn to false in localStorage
    localStorage.isLoggedIn = false;
    localStorage.removeItem('username');
}