function setup() {
    var canvas = document.getElementById("glslCanvas");
    var sandbox = new GlslCanvas(canvas);

    console.log("entered7");
    var string_frag_code = "void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);}";

    sandbox.load(string_frag_code);

    sandbox.backgroundColor = "black";
}


setup();
