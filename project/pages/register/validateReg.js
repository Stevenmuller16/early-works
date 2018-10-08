function validate()
		{
			if (!name()) {
				document.myform.name.focus();
				return false;
					}
		
		
		
			if (!email()) {	
				document.myform.name.focus();
				return false;
					}
		
	
		
			if (!password()) {
				document.myform.name.focus();
				return false;	
					}

			return true;
		}

function name()
		{
		var name = document.myform.name.value;
		if (checkBlank(name)) 
			{
				alert("please enter a name");
				return false;
			}
		return true;
		}

function email()
		{
		var email = document.myform.email.value;
		if (checkBlank(email))
			{
				alert("please enter an email address");
				return false;
			}
	
		var atIndex = email.indexof("@");
		if (atIndex == -1
			{
				alert("please enter a valid email, @ is missing");
				return false;
			}
		
		if (email.indexof(".",atIndex) == -1)
			{
				alert("please enter an email domain");
				return false;
			}
		return true;
}

function password()
		{
		var password = document.myform.password.value;
		if (checkBlank(password))
			{
				alert("please enter a password");
			}
		return true;
		}

function checkBlank(string)
		{
			if ( string.length ==0)
				{
					return true;
				}
			for (var i = 0; i<= string.length-1; i++)
				{
					if (string.charAt(i) != " ")
						{
							return false;
						}
				return true;
				}
		}









