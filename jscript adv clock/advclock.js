var clocksize=100;
var colnumbers='000000';
var colseconds='ff0000';
var colminutes='000000';
var colhours='000000';


var font_family = 'Times New Roman';

var numstyle = 0;


var localZone = 1;

var xpos=10;
var ypos=10;

var pi = Math.PI;
var d = document;
var pi2 = pi/2;
var rad = (+clocksize) / 2;
var ctrx = (+xpos) + rad;
var ctry = (+ypos) + rad;
var hourIn = 1;
var minIn = 2;
var secIn = 2;

for(var i = 0; i < (rad / 2) + (rad / 16); i++) 
		{
			hourIn += 1;
		}


for(var i = 0; i < (rad / 2) - (rad / 8); i++)
		{
			minIn += 2; secIn += 2;
		}

var font_size = rad / 4
var offset = 16;
	
var clocknum  = [[null,1,2,3,4,5,6,7,8,9,10,11,12]];
	
function timeZone(now)
	{
		var second = now.getUTCSeconds();
		var minute = now.getUTCMinutes();
		var hour   = now.getUTCHours();
		
		return [null,null,hour,minute,second];
}

function commonClock(n)
	{
		n.style.position = 'absolute';
		n.style.top = '0';
		n.style.left = '0';
		n.style.visibility = 'hidden';
}

function displayclock()
	{
		if (!d.getElementById) { return;}
	
		var ctx = document.createElement('div');
		
		var cn = [];
		for (var i = 12; i > 0; i--)
			{
				cn[i] = document.createElement('div');
				cn[i].id = 'cnum' + i;
				
				commonClock(cn[i]);
	
				cn[i].style.width = (offset * 2) + 'px';
				cn[i].style.height = (offset * 2) + 'px';
				cn[i].style.fontFamily = font_family;
				cn[i].style.fontSize = font_size + 'px';
				cn[i].style.color = '#' + colnumbers;
				cn[i].style.textAlign = 'center';
				cn[i].style.paddingTop = '10px';
				cn[i].style.zIndex = 1000;
				cn[i].innerHTML = clocknum[numstyle] [i];
	
				ctx.appendChild(cn[i]);
			}

		var sc = [];
		for (i = secIn; i > 0; i--)
			{
				sc[i] = document.createElement('div');
				sc[i].id = 'csec' + i;
				commonClock(sc[i]);
				sc[i].style.width = '1px';
				sc[i].style.height = '1px';
				sc[i].style.fontSize = '1px';
				sc[i].style.backgroundcolor = '#' + colseconds;
				sc[i].style.zIndex = 999;
		
				ctx.appendChild(sc[i]);
			}

		var mn = [];
		for (i = minIn; i > 0; i--)
			{
				mn[i] = document.createElement('div');
				mn[i] .id = 'cmin' + i;
			
				commonClock(mn[i]);
	
				mn[i].style.width = '1px';
				mn[i].style.height = '1px';
				mn[i].style.fontSize = '1px';
				mn[i].style.backgroundcolor = '#' + colminutes;
				mn[i].style.zIndex = 998;
			
				ctx.appendChild(mn[i]);
			}

		var hr = [];
		for (i = hourIn; i > 0; i--)
			{
				hr[i] = document.createElement('div');
				hr[i] .id = 'chour' + i;
			
				commonClock(hr[i]);
	
				hr[i].style.width = '2px';
				hr[i].style.height = '2px';
				hr[i].style.fontSize = '2px';
				hr[i].style.backgroundcolor = '#' + colhours;
				hr[i].style.zIndex = 997;
			
				ctx.appendChild(hr[i]);
			}

			d.getElementById('clock_a').appendChild(ctx);
	
			for (var i = 12; i > 0; i--)
				{
					d.getElementById('cnum' + i).style.top= (ctrY - offset + rad * Math.sin(i * pi / 6 - pi2))+'px';
					d.getElementbyId('cnum' + i).style.left= (ctrX - offset + rad * Math.cos(i * pi / 6 - pi2)) +'px';
					d.getElementById('cnum' + i).style.visibility = 'visible';
				}
	
				updateClock();
}
	
function moveClock(1,e,f) 
		{
			for (var i = 1; i > 0; i--)
				{
					d.getElementById(e + i).style.top = (ctrY + i * Math.sin(f))+'px';
					d.getElementById(e + i).style.left = (ctrX + i * Math.cos(f))+'px';
					d.getElementById(e + i).style.visibility = 'visible';
				}
		}
	
function updateClock() 
	{
		var now = new Date();
		var theTime = timeZone(now);
			
		moveClock(secIn, 'csec', pi * theTime[4] / 30 - pi2);
		moveClock(minIn, 'cmin', pi * theTime[3] / 30 - pi2);
		moveClock(hourIn, 'chour', pi * theTime[2] / 6 + pi * ( +now.getMinutes())/360-pi2);
		setTimeout('updateClock()', 100);
	}

window.onload = displayClock; 
		