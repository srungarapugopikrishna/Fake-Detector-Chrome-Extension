var buttonOnSite = document.getElementById("eow-title"),
    parent = buttonOnSite.parentElement,
    next = buttonOnSite.nextSibling,
    button = document.createElement("button"),
//    button.style = "background-color: #900;color: #FFF;font-weight: bold;font-size: 150%;",
    text = document.createTextNode("ABCDEFGHIJKLMNOP");

button.appendChild(text);
if (next) parent.insertBefore(button, next);
else parent.appendChild(button);