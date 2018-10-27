

var colors = ["blue", "yellow", "pink", "green", "red", "white"];
var options = ["first", "second", "third", "fourth"];
var code = new Array();

var selected = {
    "blue": 0,
    "yellow": 0,
    "pink": 0,
    "green": 0,
    "red": 0,
    "white": 0
};

var index = 0;
var previous = "";
var numberOfAttempts = 0;
var gameWon = false;

window.addEventListener("load", init, false);

function init() {
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * colors.length);
        while (code.indexOf(colors[random]) != -1) {
            random = Math.floor(Math.random() * colors.length);
        }
        code.push(colors[random]);
    }
}

function enterGuess() {
    if (!gameWon) {
        if (index == 4) {
            var guess = new Array();

            for (var i = 0; i < options.length; i++) {
                var colorIndex = getColorIndex(gid(options[i]));
                if (colorIndex != -1) {
                    guess.push(colors[colorIndex]);
                }
            }
            if (previous == guess.join(",")) {
                if (confirm("Are you sure you wish to make the same guess?")) {
                    checkGuess(guess);
                }
            } else {
                checkGuess(guess);
            }
        } else {
            alert("You must enter 4 colors first.");
        }
        reset();
    }
    else {
        alert("You won!\n\nIf you want to start a new game press the \'Reset\' button.");
    }
}

function checkGuess(guess) {
    previous = guess.join(",");
    numberOfAttempts++;

    var rightPlace = 0;
    var rightColor = 0;

    for (var x = 0; x < code.length; x++) {
        for (var y = 0; y < guess.length; y++) {
            if (guess[y] == code[x]) {
                if (x == y) {
                    rightPlace++;
                } else {
                    rightColor++;
                }
            }
        }
    }

    if (rightPlace == 4) {
        gid("history")
                .appendChild(document.createElement("span"))
                .appendChild(document.createTextNode("Congratulations! You won with " + numberOfAttempts + " guesses."));
        document.body.className = "victory";
        gameWon = true;
    } else {
        var record = document.createElement("li");
        var msg = document.createElement("span");
        if (rightPlace == 1) {
            msg.appendChild(document.createElement("b"))
               .appendChild(document.createTextNode("1"));
            msg.appendChild(document.createTextNode(" right color in the right place."));
        } else {
            if (rightPlace == 0) {
                msg.appendChild(document.createElement("b"))
                   .appendChild(document.createTextNode("no"));
            } else {
                msg.appendChild(document.createElement("b"))
                   .appendChild(document.createTextNode(rightPlace.toString()));
            }
            msg.appendChild(document.createTextNode(" right colors in the right place."));
        }
        record.appendChild(msg);


        var msg = document.createElement("span");
        if (rightColor == 1) {
            msg.appendChild(document.createElement("b"))
               .appendChild(document.createTextNode("1"));
            msg.appendChild(document.createTextNode(" right color in the wrong place."));
        } else if (rightColor < 4) {
            if (rightColor == 0) {
                msg.appendChild(document.createElement("b"))
                   .appendChild(document.createTextNode("no"));
            } else {
                msg.appendChild(document.createElement("b"))
                   .appendChild(document.createTextNode(rightColor.toString()));
            }
            msg.appendChild(document.createTextNode(" right colors in the wrong place."));
        }
        record.appendChild(msg);
        gid("history").appendChild(record);

        var colormsg = document.createElement("li");
        for (var i = 0; i < guess.length; i++) {
            var c = document.createElement("div");
            c.className = "ball " + guess[i];
            colormsg.appendChild(c);
        }
        gid("history-color").appendChild(colormsg);
    }
}

function choose(color) {
    if (!gameWon) {
        if (index != 4 && selected[color] == 1) {
            alert('You can only choose one color once.');
        } else if (index < 4) {
            var classNames = gid(options[index]).className.split(" ");
            classNames[classNames.indexOf("active")] = color;
            gid(options[index]).className = classNames.join(" ");
            if (index < 3) {
                gid(options[index + 1]).className += " active";
            }
            index++;
            selected[color]++;
        }
    }
    else {
        alert("You won!\n\nIf you want to start a new game press the \'Reset\' button.");
    }
}

function removeGuess(position) {
    var removeAt = getColorIndex(gid(position));
    if (removeAt != -1) {
        selected[colors[removeAt]]--;
    }
    for (var i = options.indexOf(position); i < index - 1; i++) {
        var current = getColorIndex(gid(options[i]));
        var next = getColorIndex(gid(options[i + 1]));

        var classNames = gid(options[i]).className.split(" ");
        if (classNames.indexOf(colors[current]) != -1) {
            classNames[classNames.indexOf(colors[current])] = colors[next];
        }
        gid(options[i]).className = classNames.join(" ");
    }
    if (index < 4) {
        deactivate(gid(options[index]));
    }
    activate(gid(options[index - 1]));
    index--;
}

function reset() {
    for (var i = 0; i < options.length; i++) {
        var classNames = gid(options[i]).className.split(" ");
        var ci = getColorIndex(gid(options[i]));
        if (ci != -1) {
            classNames.splice(classNames.indexOf(colors[ci]), 1);
        }
        gid(options[i]).className = classNames.join(" ");
        deactivate(gid(options[i]));
    }
    gid("first").className += " active";
    index = 0;
    for (var key in selected) {
        selected[key] = 0;
    }
}

function getColorIndex(node) {
    var classNames = node.className.split(" ");
    for (var c = 0; c < classNames.length; c++) {
        if (colors.indexOf(classNames[c]) != -1) {
            return colors.indexOf(classNames[c]);
        }
    }
    return -1;
}

function deactivate(node) {
    var classNames = node.className.split(" ");
    if (classNames.indexOf("active") != -1) {
        classNames.splice(classNames.indexOf("active"), 1);
    }
    node.className = classNames.join(" ");
}

function activate(node) {
    var toActivate = getColorIndex(node);
    var classNames = node.className.split(" ");
    if (toActivate != -1) {
        classNames[classNames.indexOf(colors[toActivate])] = "active";
    }
    node.className = classNames.join(" ");
}

function fullReset() {
    if (confirm("Are you sure you wish to reset this game?\nAll information will be lost.")) {
        window.location.reload()
    }
}

function gid(id) {
    return document.getElementById(id);
}




