/*
 * Author: Jake Goodwin
 * Date: 2022
 * Description: The main file for the projects JS.
 */

//SOURCES:
// MDN web docs https://developer.mozilla.org/en-US/docs/Web
// Tutorials Point https://www.tutorialspoint.com/webgl/index.html
// 

//Make sure we wait for the page to load.

//################################
// GLOBALS. 
//################################



class Vertex {
    constructor(x, y, z, r=0.0, g=0.0, b=0.0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r; //Red value
        this.g = g; //Green value
        this.b = b; //Blue value
        this.s = s; //Scalar value 
    }
}




function main(){
    console.log("main()\n");

    //get the context.
    var [gl, canvas] = getRenderingContext();

    //clearing with solid color.
    //clear_with_color(gl);

    //var dot = Vertex.new(0, 0, 0);
    //draw_dot(gl, dot);
    tringle_example(gl, canvas);   

    return;
}


//################################
// SECTIONNAME
//################################





//################################
//FUNCTIONS 
//################################


function getRenderingContext() {
    console.log("getRenderingContext()\n");

    const canvas = document.querySelector("canvas");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const gl = canvas.getContext("webgl")
        || canvas.getContext("experimental-webgl");
    if (!gl) {
        const paragraph = document.querySelector("p");
        paragraph.innerHTML = "Failed to get WebGL context."
        + "Your browser or device may not support WebGL.";
        return null;
    }

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    return [gl, canvas];
}

function clear_with_color(gl) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}


function draw_dot(gl, v) {
    console.log("draw_dot()");
    return;
}



function tringle_example(gl, canvas) {
    //define our data and store into buffer obj
    var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5,];

    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    //Create and compile shader pgrms
    // Vertex shader source code
    var vertCode =
        'attribute vec2 coordinates;' + 
        'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);

    var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' + '}';

     // Create fragment shader object
     var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

     // Attach fragment shader source code
     gl.shaderSource(fragShader, fragCode);

     // Compile the fragment shader
     gl.compileShader(fragShader);

     // Create a shader program object to store combined shader program
     var shaderProgram = gl.createProgram();

     // Attach a vertex shader
     gl.attachShader(shaderProgram, vertShader);

     // Attach a fragment shader
     gl.attachShader(shaderProgram, fragShader);

     // Link both programs
     gl.linkProgram(shaderProgram);

     // Use the combined shader program object
     gl.useProgram(shaderProgram);

     /* Step 4: Associate the shader programs to buffer objects */

     //Bind vertex buffer object
     gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

     //Get the attribute location
     var coord = gl.getAttribLocation(shaderProgram, "coordinates");

     //point an attribute to the currently bound VBO
     gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

     //Enable the attribute
     gl.enableVertexAttribArray(coord);

     /* Step5: Drawing the required object (triangle) */

     // Clear the canvas
     gl.clearColor(0.5, 0.5, 0.5, 0.9);

     // Enable the depth test
     gl.enable(gl.DEPTH_TEST);

     // Clear the color buffer bit
     gl.clear(gl.COLOR_BUFFER_BIT);

     // Set the view port
     gl.viewport(0,0,canvas.width,canvas.height);

     // Draw the triangle
     gl.drawArrays(gl.LINE_LOOP, 0, 3);


}





