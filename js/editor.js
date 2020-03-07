let lastThemeApplicationAttempt;
let timeBetweenApplications = 1000; // ms


function keyDown() {

    lastThemeApplicationAttempt = getCurrentTime();
    setTimeout(() => { attemptThemeApplication() }, 1000);
}

function getCurrentTime() {
    return new Date().getTime();

}

function attemptThemeApplication() {
    var currentTime = getCurrentTime();
    console.log(currentTime - lastThemeApplicationAttempt);
    if (currentTime - lastThemeApplicationAttempt < timeBetweenApplications) {
        return;
    }
    else {
        console.log("applying");
        var editor = document.getElementById("editor");
        var doc = editor.ownerDocument.defaultView;
        var sel = doc.getSelection();
        var range = sel.getRangeAt(0);


        var tabNode = document.createTextNode("\t");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        

        hljs.initHighlighting.called = false;
        hljs.initHighlighting();


        sel.addRange(range);
    }
}

$(document).keydown(function(objEvent) {
    console.log("recognized");
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
