var x = parseInt(prompt("Enter first number")),
    y = parseInt(prompt("Enter second number")),
    z = parseInt(prompt("Enter third number"));

if (x < y && x < z) {
       alert(x);
    if (y < z) {
        alert(y);
        alert(z);
    }
	 else {                  
       alert(z);
       alert(y);
    }
} 
else if (y < z && y < x) {
    alert(y);
    if (z < x) {
        alert(z);
        alert(x);
    } 
	else {                  
        alert(x);
        alert(z);
    }
} else {                     
    alert(z);        
    if (x < y) {
    alert(x);
    alert(y);
    } 
	else {                  
       alert(y);
       alert(x);
    }
}
if (x > y && x > z) {
       alert(x);
    if (y > z) {
        alert(y);
        alert(z);
    } 
	else  {                  
       alert(z);
       alert(y);
    }
} else if (y > z && y > x) {
    alert(y);
    if (z > x) {
        alert(z);
        alert(x);
    } 
	else  {                  
        alert(x);
        alert(z);
    }
} else {                     
    alert(z);        
    if (x > y) {
    alert(x);
    alert(y);
    } 
	else  {                  
       alert(y);
       alert(x);
    }
}