let lastThemeApplicationAttempt;
let timeBetweenApplications = 3000; // ms


function getCurrentTime() {
    return new Date().getTime();

}

function attemptThemeApplication() {
    var currentTime = getCurrentTime();
    if (currentTime - lastThemeApplicationAttempt < timeBetweenApplications) {
        return;
    }
    else {

        hljs.initHighlighting.called = false;
        hljs.initHighlighting();

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }

    }
}

$(document).keydown(function(objEvent) {
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
    else {
        lastThemeApplicationAttempt = getCurrentTime();
        setTimeout(() => { attemptThemeApplication() }, timeBetweenApplications);
    }
})
