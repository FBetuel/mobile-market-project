//credite https://www.google.com/search?q=how+to+make+a+database+in+javascript+for+a+login&oq=how+to+make+a+database+in+javascript+for+a+login&aqs=chrome..69i57j33i160l2j33i22i29i30.14947j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:884aeedb,vid:UAu7cMuu0BI,st:95

var objPeople = [
    {
        username: "george",
        password: "proiect"
    },
    {
        username: "stefan",
        password:"proiect"
    },
    {
        username: "fatma",
        password: "proiect"
    },
    {
        username: "cristina",
        password: "proiect"
    },
    {
        username: "ionela",
        password: "proiect"
    }
]

function getinfo() {
var username = document.getElementById("username").value
var password = document.getElementById("password").value
for (i=0;i<objPeople.length;i++){
    if(username==objPeople[i].username && password==objPeople[i].password){
        console.log(username + " is logged in!")
        return 1;
        break;
    }
    else {
        alert ("Incorrect username or password");
        break;
    }
}
}