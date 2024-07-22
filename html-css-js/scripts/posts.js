const loggedIn = localStorage.length;
if (!loggedIn){
    alert("Please login to view to page !")
    window.location.href = "/app/login.html";
} 
