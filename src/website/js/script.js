window.addEventListener('load', onLoad);
window.addEventListener('scroll', onScroll);

function onLoad() {
}

var opening = 0;
var logoWidth = 446;

function openTheGates() {
    opening+=5;

	var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	var newWidth = logoWidth + opening;
	var marginLeft = Math.floor((newWidth - gid('container').clientWidth - scrollbarWidth)/2.0);

	if(newWidth < logoWidth)  {
		newWidth = logoWidth;
		marginLeft = 0;
	}

	var logo = gid('logo_container');

    logo.style.marginLeft = '-'+marginLeft+'px';
    logo.style.width = newWidth+'px';

    if(logo.clientWidth < window.innerWidth ) {
        setTimeout(function(){ openTheGates(); }, 10);
    } else {
        window.location.href = "http://scriptgate.net/html/site.html";
    }
}

function onScroll() {
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    var newWidth = logoWidth + pageYOffset;
    var marginLeft = Math.floor((newWidth - gid('container').clientWidth - scrollbarWidth)/2.0);

    if(newWidth < logoWidth)  {
        newWidth = logoWidth;
        marginLeft = 0;
    }
    var logo = gid('logo_container');

    logo.style.marginLeft = '-'+marginLeft+'px';
    logo.style.width = newWidth+'px';

}

function gid(id) {
	return document.getElementById(id)
}