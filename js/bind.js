/**
 * 
 */
var fullMode = 0;
function start()
{
	generator();
}
function btnFullClick()
{
	fullMode = !fullMode;
	if(fullMode == 0)
		document.getElementById('CSSsource').href='css/bindshort.css';
	else
		document.getElementById('CSSsource').href='css/bindfull.css';
	document.getElementById('btnfull').value = fullMode?"В окне":"На весь экран";
}
function generator() {
	var date = new Date();
	document.getElementById('currtime').innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	setTimeout(generator, 1000);  
}

	
