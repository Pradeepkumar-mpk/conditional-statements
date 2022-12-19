var x = parseInt(prompt("Enter first number")),
    y = parseInt(prompt("Enter second number")),
    z = parseInt(prompt("Enter third number"));

	if (x>y && x>z)
	{
	        if (y>z)
	        {
	            alert(x,y,z);
			    alert(z,y,x);
	        }
	        else
	        {
	            alert(x,z,y);
			   alert(y,z,x);
	        }
	}
	else if (y>x && y >z)
	{
	        if (x>z)
	        {
	             alert(y,x,z);
				 alert(z,x,y);
	        }
	        else
	        {
	             alert(y,z,x);
				 alert(x,z,y);
	        }
	}
	else if (z>x && z>y)
	{
	        if (x>y)
	        {
	            alert(z,x,y);
			   alert(y,x,z);
	        }
	        else
	        {
	            alert(z,y,x);
				alert(x,y,z);
	        }
	}