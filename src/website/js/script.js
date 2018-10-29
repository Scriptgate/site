window.addEventListener('load', onLoad)
window.addEventListener('scroll', onScroll);


function onLoad() {
	window.scrollTo(0,0);
}

function onScroll() {


	var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
	var newWidth = 346 + pageYOffset;//446 - 100
	var marginLeft = Math.floor((newWidth - gid('container').clientWidth - scrollbarWidth)/2.0);

	if(newWidth < 446)  {
		newWidth = 446;
		marginLeft = 0;
	}

	var logo = gid('logo_container');
	var content = gid("content")

	if(newWidth < 926) {//480 + 446
		logo.style.marginLeft = '-'+marginLeft+'px';
		logo.style.width = newWidth+'px';
		logo.style.marginTop = pageYOffset+'px';
        content.style.opacity = 0;
		logo.style.backgroundImage = "url('resources/hex_color_50_opacity.svg')";
	} else {
		if(pageYOffset < 1750) {
			logo.style.backgroundImage = 'none';
			content.style.opacity = pageYOffset/1750;
			content.style.marginTop= (pageYOffset - 1585)+'px';//875 + 560 + 150
		}

	}
}

function gid(id) {
	return document.getElementById(id)
}