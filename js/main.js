let canvas;
let sandbox;
let editor;

function setup() {
    canvas = document.getElementById("glslCanvas");
    sandbox = new GlslCanvas(canvas);

    onRun();
}
setup();



function onRun() {
    editor = document.getElementById("editor");

    var code = editor.textContent;
    sandbox.load(code);
}
