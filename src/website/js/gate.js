
var wall;

function enableMasonry() {
    console.log("Booting Masonry...")
	var $container = $('#container');
	var em = parseFloat( $container.css('font-size') );
	wall = new Masonry(document.getElementById("container"), {columnWidth: 20*em});
	console.log("... Masonry booted.")
};


window.onload = function() {
	enableColorPicker();
	enableMasonry();
	loadCookie();
}

window.onresize = resizePage;



function resizePage() {
	wall.reload();
}

var palette = {
	"red":   new Array("#ff9966", "#7d0000", "#960000", "#af0000", "#c80000", "#e10000"),
	"blue":  new Array("#0099ff", "#0033cc","#0066ff",  "#0071ff","#008bff",  "#00adff"),
	"green": new Array("#00ee5d", "#007d00", "#009600", "#00a216", "#02b400", "#00d03c"),
	"yellow":new Array("#eddb54", "#7d7d00", "#969600", "#afaf00", "#c8c800", "#afaf00"),
	"black": new Array("#c3c3c3", "#2a2a2a", "#646464", "#7d7d7d", "#969696", "#afafaf")
	}

function enableColorPicker() {
	for(c in palette) {
		getElem(c).setAttribute("href", "javascript:pickColor('"+c+"');");
	}
}



function pickColor(g) {
	setColors(g);
	setCookie("colorPicker",g,365);
}

function setColors(g) {
	var pheaders = document.getElementsByClassName("panelheader");
	var panels = document.getElementsByClassName("panel");

	getElem("header").style.backgroundColor = palette[g][0];

	for(var i = 0; i < panels.length; i++) {
		panels[i].style.backgroundColor=palette[g][0];
	}

	for(var i = 0; i < pheaders.length; i++) {
		pheaders[i].style.backgroundColor=palette[g][1];
	}
	getElem("games").style.backgroundColor = palette[g][2];
	getElem("applications").style.backgroundColor = palette[g][3];
	getElem("tutorials").style.backgroundColor = palette[g][4];
	getElem("examples").style.backgroundColor = palette[g][5];
}

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString() + ";domain=.scriptgate.net;path=/");
	document.cookie=c_name + "=" + c_value;
}


function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
		c_start = c_value.indexOf(c_name + "=");
	if (c_start == -1)
		c_value = null;
	else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}


function loadCookie() {
	var savedColor = getCookie("colorPicker");
	if (savedColor != null && savedColor != "") {
		setColors(savedColor);
	}
}


function getElem(id) {
	return document.getElementById(id);
}