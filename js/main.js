/*
 * Author: Jake Goodwin
 * Date: 2022
 * Description: The main file for the projects JS.
 */

//Make sure we wait for the page to load.

//################################
// GLOBALS. 
//################################






function main(){
    console.log("main()\n");

    //get the context.
    var gl = getRenderingContext();

    //clearing with solid color.
    clear_with_color(gl);

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

    return gl;
}

function clear_with_color(gl) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}


function draw_dot() {

}









