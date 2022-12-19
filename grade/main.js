var marks = parseInt(prompt("Enter marks"));
if (marks>80){
	alert("grade A");
}
else if (marks>60 && marks<=80){
	alert("grade B");
}
else if (marks>50 && marks<=60){
	alert("grade C");
}
else if (marks>45 && marks<=50){
	alert("grade D");
}
else if (marks>25 && marks<=45){
	alert("grade E");
}
else {
	alert("grade F")
}

