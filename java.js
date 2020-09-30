function validate()
{
if(document.myForm.Email.value=="")
{
	alert("please provide your email");
	document.myForm.Email.focus();
	return false;
}
if(document.myForm.NAME.value=="")
{
	alert("please provide your name on the card");
	document.myForm.NAME.focus();
	return false;
}
}

function validateEmail()
{
	var emailID=document.myForm.Email.value;
	atpos=emailID.indexOf("@");
	dotpos=emailID.lastIndexOf(".");
	if(atpos<1||(dotpos-atpos<2))
	{
		alert("please enter correct email");
		document.myForm.Email.focus();
		return false;
	}return(true);
	}
