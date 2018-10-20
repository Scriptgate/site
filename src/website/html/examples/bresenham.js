var w_onload = window.onload;

window.onload = function() {
	w_onload();
	enableMouseOver();
}

function enableMouseOver() {
	var elems = new Array(
		"bla_2",
		"bla_1st",
		"bla_1_3",
		"bla_1_1st",
		"bla_1_2nd",
		"bla_1_3rd",
		"bla_2nd",
		"bla_2_2",
		"bla_2_1st",
		"bla_2_2nd",
		"bla_3rd");
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
		case "bla_2":
			getElem("bla_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_2nd").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_3rd").style.borderLeft="0.625em inset #969696";
			getElem("bla_2nd").style.borderLeft="0.625em inset #969696";
			getElem("bla_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_2_2nd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_1st":
			getElem("bla_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_2nd").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_3rd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_1_3":
			getElem("bla_1_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_1_2nd").style.borderLeft="0.625em solid #969696";
			getElem("bla_1_3rd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_1_1st":
			getElem("bla_1_1st").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_1_2nd":
			getElem("bla_1_2nd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_1_3rd":
			getElem("bla_1_3rd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_2nd":
			getElem("bla_2nd").style.borderLeft="0.625em inset #969696";
			getElem("bla_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_2_2nd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_2_2":
			getElem("bla_2_1st").style.borderLeft="0.625em inset #969696";
			getElem("bla_2_2nd").style.borderLeft="0.625em solid #969696";
			break;
		case "bla_2_1st":
			getElem("bla_2_1st").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_2_2nd":
			getElem("bla_2_2nd").style.borderLeft="0.625em inset #969696";
			break;
		case "bla_3rd":
			getElem("bla_3rd").style.borderLeft="0.625em inset #969696";
			break;
	}
}

function hideRef(e) {
	e.style.textDecoration="none";
	switch(e.className.substring(e.className.indexOf(" ")+1)) {
		case "bla_2":
			getElem("bla_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_2nd").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_3rd").style.borderLeft="0.625em solid transparent";
			getElem("bla_2nd").style.borderLeft="0.625em solid transparent";
			getElem("bla_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_2_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_1st":
			getElem("bla_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_2nd").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_3rd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_1_3":
			getElem("bla_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_2nd").style.borderLeft="0.625em solid transparent";
			getElem("bla_1_3rd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_1_1st":
			getElem("bla_1_1st").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_1_2nd":
			getElem("bla_1_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_1_3rd":
			getElem("bla_1_3rd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_2nd":
			getElem("bla_2nd").style.borderLeft="0.625em solid transparent";
			getElem("bla_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_2_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_2_2":
			getElem("bla_2_1st").style.borderLeft="0.625em solid transparent";
			getElem("bla_2_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_2_1st":
			getElem("bla_2_1st").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_2_2nd":
			getElem("bla_2_2nd").style.borderLeft="0.625em solid transparent";
			break;
		case "bla_3rd":
			getElem("bla_3rd").style.borderLeft="0.625em solid transparent";
			break;
	}
}

function getElem(id) {
	return document.getElementById(id);
}