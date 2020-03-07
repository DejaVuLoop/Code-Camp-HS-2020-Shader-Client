let lastThemeApplicationAttempt;
let timeBetweenApplications = 2500; // ms


function getCurrentTime() {
    return new Date().getTime();

}

function attemptThemeApplication() {
    var currentTime = getCurrentTime();
    if (currentTime - lastThemeApplicationAttempt < timeBetweenApplications) {
        return;
    }
    else {
        var editor = document.getElementById("editor");

        var start = editor.selectionStart;
        var end = editor.selectionEnd;

        hljs.initHighlighting.called = false;
        hljs.initHighlighting();

    }
}

$(document).keydown(function(objEvent) {

    lastThemeApplicationAttempt = getCurrentTime();
    setTimeout(() => { attemptThemeApplication() }, timeBetweenApplications);

    if (objEvent.keyCode == 9) {  //tab pressed
        objEvent.preventDefault(); // stops its action

        var editor = document.getElementById("editor");
        var doc = editor.ownerDocument.defaultView;
        var sel = doc.getSelection();
        var range = sel.getRangeAt(0);

        var tabNode = document.createTextNode("\t");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        sel.removeAllRanges();
        sel.addRange(range);

    }
})
