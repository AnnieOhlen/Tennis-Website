/*
Comments:
"use strict";
The "use strict" directive is only recognized at the beginning of a script or a function.
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
https://www.w3schools.com/js/js_strict.asp

Ideas for script:
- If clicked x amount of times on headers then print out: are you lost? Take this map!
Some kind of function with CSS animation connected to it?
- Being able to change between bright & dark theme with button (bright currently standard for the website).
*/

//Script _only_ after this comment:

function changeTheme() {
    var element = document.body;
    element.classList.toggle("darkMode")
}

