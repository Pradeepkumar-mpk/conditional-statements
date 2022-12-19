var n= parseInt(prompt("enter the month"));
var year = parseInt(prompt("enter the year"));
var month = {1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"};
	if (n==1 || n==3 || n==5 || n==7 || n==8 || n==10 || n==12){
		document.write(month[n] +" 31 days");
	}
	else if (n==4 || n==6 || n==9 || n==11){
		document.write(month[n] +" 30 days");
	}
	else {
		if (n==2){
			if (year%4==0){
				document.write(month[n] + " 29 days");
		}
		else{
			document.write(month[n] + " 28 days")
		}
	}
}