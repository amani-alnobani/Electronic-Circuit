var name = prompt("what is your name?")

alert("welcome to the site")

var topic = prompt("what are you looking for?")


while(topic!= "I" && topic!= "S")
{
  topic = prompt("try again!")
}


if (topic == "I")
{
  document.write("<p>"+"Read carefully"+"</p>")
}

else if (topic == "S"){
  var numOread = prompt("how many times you want to see it?")
  for(var x=0; x < numOread; x++){

 document.write("<div>"+"<h2>"+"Simple circuit"+"</h2>"+
        "<img src='https://www.dummies.com/wp-content/uploads/308335.image0.jpg'>"+"</div>")}

}
else
 {
  alert("sorry pick some thing else")
 }