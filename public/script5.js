// Check if localStorage.isLoggedIn is truthy
if (localStorage.isLoggedIn) {
    // If it has a value, hide login and signup buttons
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    
    // Show signout button
    document.getElementById('signout').style.display = 'contents';
}
