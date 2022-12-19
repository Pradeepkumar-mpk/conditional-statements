var age1 = parseInt(prompt("enter age 1"));
var age2 = parseInt(prompt("enter age 2"));
var age3 = parseInt(prompt("enter age 3"));
if (age1>age2 && age1>age3){
	alert("age1 is oldest");
	if (age2>age3){
	alert("age3 is youngest");
}
else {
	alert("age2 is youngest")
}
}
	if (age2>age3 && age2>age1){
		alert("age2 is oldest");
		if (age1>age3){
		alert("age3 is youngest");
	}
	else {
		alert("age1 is youngest")
}
}
 if (age3>age1 && age3>age2){
	alert("age3 is oldest");
	if (age2>age1){
	alert("age1 is youngest");
}
else {
	alert("age2 is youngest");
}
}