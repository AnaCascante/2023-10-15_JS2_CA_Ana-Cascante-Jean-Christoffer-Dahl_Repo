//function that handles logout, will take you  to loginPage and remove localStorageItems
// have not applied clickhandles to use this function yet, will do so after the headers are the same for every page : ) 
const logOut = document.querySelector("#logOut")
function logout(){
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('name');
    window.location.href = "../index.html";

}

logOut.addEventListener("click",logout)
console.log(logOut)