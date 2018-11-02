window.addEventListener('load', onLoad)


function onLoad() {
}

var opening = 0;

function openTheGates() {



    opening+=5;

	var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
	var newWidth = 446 + opening;
	var marginLeft = Math.floor((newWidth - gid('container').clientWidth - scrollbarWidth)/2.0);

	if(newWidth < 446)  {
		newWidth = 446;
		marginLeft = 0;
	}

	var logo = gid('logo_container');

    logo.style.marginLeft = '-'+marginLeft+'px';
    logo.style.width = newWidth+'px';

    console.log("window:"+window.innerWidth);
    console.log("container:"+logo.clientWidth);
    if(logo.clientWidth < window.innerWidth ) {
        setTimeout(function(){ openTheGates(); }, 10);
    } else {
        window.location.href = "http://scriptgate.net/html/site.html";
    }

}

function gid(id) {
	return document.getElementById(id)
}