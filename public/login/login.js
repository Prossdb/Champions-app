function validate()
{
var username= document.getElementById("username").value
var password= document.getElementById("password").value
if(username=="admin" && password=="1234")
{
  window.location.replace("index.html")
}
else
{
  alert("Invalied username and password"); 
}

}