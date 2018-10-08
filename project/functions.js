var request = new XMLHttpRequest();
	

	function reviSelect()
		{
			request.open("GET", "reviewselect.html", true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{ 
							document.getElementById('content').innerHTML = request.responseText;
						}
				}
			request.send(null);
		}

	function register()
		{
			request.open("GET", "register.html", true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{
							document.getElementById('content').innerHTML = request.responseText;
						}
				}
			request.send(null);
		}
	
	function supportOpen()
		{
			request.open("GET", "support.html",true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{
							document.getElementById('content').innerHTML = request.responseText;
						}
				}
			request.send(null);
		}

	function faq()
		{
			request.open("GET", "faq.html", true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{
							document.getElementById('content').innerHTML = request.responseText;
						}
				}
			request.send(null);
		}

	function aboutus()
		{
			request.open("GET", "aboutus.html", true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{	
							document.getElementById('content').innerHTML = request.responseText;	
						}
				}
			request.send(null);
		}
	
	function disclaimer()
		{
			request.open("GET", "disclaimer.html", true);
			request.onreadystatechange=function()
				{
					if (request.readystate == 4)
						{
							document.getElementById('content').innerHTML = request.responseText;
						}
				}
			request.send(null);
		}

		