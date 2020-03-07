let canvas;
let sandbox;
let editor;

images = [];


function createImageObject(name, url) {
    var dict = {};
    dict["name"] = name;
    dict["url"] = url;

    return dict;
}


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

    for (i=0; i< images.length; i++) {
        var image = images[i];
        console.log(image['url']);
        sandbox.setUniform(image.name, image.url);
    }

    sandbox.load(code);
}

function onUrlSubmit() {
    var picker = document.getElementById("imagePicker")
    var url = picker.value;
    if (url != "" ) {
        var name = "u_tex" + images.length;

        var image = createImageObject(name, url);
        images[images.length] = image;

        var li = document.createElement("LI");
        var txt = document.createTextNode(name);
        li.appendChild(txt);
        document.getElementById("imageSection").appendChild(li);

        picker.value = null;
    }

}
