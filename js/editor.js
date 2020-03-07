let lastThemeApplicationAttempt;
let timeBetweenApplications = 1000; // ms

let dateObject = new Date() // no memory leaks pls


function keyDown() {
    lastThemeApplicationAttempt = getCurrentTime();
    setTimeout(() => { attemptThemeApplication() }, 1000);
}

function getCurrentTime() {
    return dateObject.getTime();

}

function attemptThemeApplication() {
    var currentTime = getCurrentTime();
    console.log(currentTime);
    if (currentTime - lastThemeApplicationAttempt < timeBetweenApplications) {
        return;
    }
    else {
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    }
}




document.getElementById("editor").addEventListener("keypress", function(event) {
    if (event.keyCode === 9) { // tab key
       e.preventDefault();  // this will prevent us from tabbing out of the editor
       console.log("got this far");
       // now insert four non-breaking spaces for the tab key
       var editor = document.getElementById("editor");
       var doc = editor.ownerDocument.defaultView;
       var sel = doc.getSelection();
       var range = sel.getRangeAt(0);

       var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
       range.insertNode(tabNode);

       range.setStartAfter(tabNode);
       range.setEndAfter(tabNode);
       sel.removeAllRanges();
       sel.addRange(range);
   }
}, false);
