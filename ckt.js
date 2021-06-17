<<<<<<< HEAD

var name = prompt("what is your name?")

alert("welcome to the site")

var topic = prompt("what are you looking for?")


while(topic!= "Introduction" && topic!= "Simple circuit"){
  topic = prompt("try again!")
}
=======

var topic = prompt("what are you lokking for?")

>>>>>>> 0c908203ff0db3c9cfcd2107053f3a65b32a47c5
if (topic == "Introduction")
{
  document.write("<p>"+"Read carefully"+"</p>")
}
<<<<<<< HEAD
else if(topic == "Simple circuit"){
  var numOread = prompt("how many times you want to see it?")
  for(var x=0; x < numOread; x++){

 document.write("<div>"+"<h2>"+"Simple circuit"+"</h2>"+
        "<img src='https://www.dummies.com/wp-content/uploads/308335.image0.jpg'>"+"</div>")
  }
=======
else if(topic == "Simple circuit")
{
 document.write("<div>"+"<h2>"+"Simple circuit"+"</h2>"+
        "<img src='https://www.dummies.com/wp-content/uploads/308335.image0.jpg'>"+"</div>")
>>>>>>> 0c908203ff0db3c9cfcd2107053f3a65b32a47c5
}
else
 {
  alert("sorry pick some thing else")
<<<<<<< HEAD
}

=======
}
>>>>>>> 0c908203ff0db3c9cfcd2107053f3a65b32a47c5
