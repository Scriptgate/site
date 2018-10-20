var w_onload = window.onload;

window.onload = function() {
	w_onload();
	enableMouseOver();
}

function enableMouseOver() {
	var elems = new Array(
		"fs_2",
		"fs_1st",
		"fs_2nd",
		"fs_2_4",
		"fs_2_1st",
		"fs_2_2nd",
		"fs_2_3rd",
		"fs_2_4th");
	for(var i = 0; i < elems.length; i++) {
		var c_elems = document.getElementsByClassName(elems[i]);
		for(var j = 0; j < c_elems.length; j++) {
			c_elems[j].onclick = function() {showRef(this);};
		}
	}
}

var prevRef;

function showRef(e) {
	if(prevRef) {
		hideRef(prevRef);
	}
	prevRef = e;
	e.style.textDecoration="underline";
	switch(e.className.substring(e.className.indexOf(" ")+1)) {
		case "fs_2":
			getElem("fs_1st").style.borderLeft="0.625em inset #969696";
			getElem("fs_2nd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_2nd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_3rd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_4th").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_5th").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_1st":
			getElem("fs_1st").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_2nd":
			getElem("fs_2nd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_2nd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_3rd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_4th").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_5th").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_2_4":
			getElem("fs_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_2nd").style.borderLeft="0.625em solid #969696";
			getElem("fs_2_3rd").style.borderLeft="0.625em inset #969696";
			getElem("fs_2_4th").style.borderLeft="0.625em solid #969696";
			break;
		case "fs_2_1st":
			getElem("fs_2_1st").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_2_2nd":
			getElem("fs_2_2nd").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_2_3rd":
			getElem("fs_2_3rd").style.borderLeft="0.625em inset #969696";
			break;
		case "fs_2_4th":
			getElem("fs_2_4th").style.borderLeft="0.625em inset #969696";
			break;
	}
}

function hideRef(e) {
	e.style.textDecoration="none";
	switch(e.className.substring(e.className.indexOf(" ")+1)) {
		case "fs_2":
			getElem("fs_1st").style.borderLeft="0.625em solid transparent";
			getElem("fs_2nd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_2nd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_3rd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_4th").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_5th").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_1st":
			getElem("fs_1st").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2nd":
			getElem("fs_2nd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_2nd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_3rd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_4th").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_5th").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2_4":
			getElem("fs_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_2nd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_3rd").style.borderLeft="0.625em solid transparent";
			getElem("fs_2_4th").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2_1st":
			getElem("fs_2_1st").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2_2nd":
			getElem("fs_2_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2_3rd":
			getElem("fs_2_3rd").style.borderLeft="0.625em solid transparent";
			break;
		case "fs_2_4th":
			getElem("fs_2_4th").style.borderLeft="0.625em solid transparent";
			break;
	}
}

function getElem(id) {
	return document.getElementById(id);
}