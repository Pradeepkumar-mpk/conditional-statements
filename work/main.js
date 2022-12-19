var age = parseInt(prompt("enter age"));
var sex = prompt("enter sex");
var martialStatus= prompt("enter martial status");
 if (sex === "male"){
		if (age >= 20 && age <=40)
	    {
			alert("work anywhere");
		} 
		else if ( age >40 && age <=60) 
		{
			alert("work in urban areas");	
	}
}
else if( sex === "female") {
	alert("work in urban areas");
}
else{
	alert("error")
}