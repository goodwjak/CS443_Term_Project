/*
 * Author: Jake Goodwin
 * Date: 2022
 * Description: The main file for the projects JS.
 */

//Make sure we wait for the page to load.

//################################
// GLOBALS. 
//################################





main();

function main(){
    console.log("main()\n");

    const gl = canvas.getContext("webgl") 
        || canvas.getContext("experimental-webgl");



    //clearing with solid color.
    clear_with_color();

    return;
}


//################################
// SECTIONNAME
//################################





//################################
//FUNCTIONS 
//################################


function clear_with_color(gl) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.0, 0.5, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}


function draw_dot() {

}









