let canvas;
let sandbox;
let editor;

images = [];


setup();

function setup() {
    canvas = document.getElementById("glslCanvas");
    sandbox = new GlslCanvas(canvas);

    onRun();
}

function onRun() {
    var height = document.getElementById("heightInput").value;
    canvas.height = height;
    var width = document.getElementById("widthInput").value;
    canvas.width = width;

    editor = document.getElementById("editor");
    var code = editor.textContent;

    counter = 0;
    for (var image in images) {
        console.log("adding");
        //sandbox.setUniform("u_tex" + counter, "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png");
        sandbox.setUniform("u_tex"+counter, image);
        counter++;
    }
    sandbox.load(code);
}

function onFileSubmit(event) {
    var reader = new FileReader();
    var name = event.target.files[0].name;
    reader.addEventListener("load", function() {
        if (this.result && localStorage) {
            images[images.length] = this.result;
            console.log("added");
        }
            else {
                alert()
            }
        });
        reader.readAsDataURL(event.target.files[0]);
    }
