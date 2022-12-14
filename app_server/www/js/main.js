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


//Gets the git log and puts it into the page.
function get_log() {
    console.log("get_log()\n");
    const myArticle = document.getElementById("log-data");
    function getData(pageId) {
        console.log(pageId);
        const myRequest = new Request(`/read/git_log`);
        fetch(myRequest)
            .then((response) => response.text())
            .then((text) => {
                text = text.replace(/</gi, "");
                text = text.replace(/>/gi, "");
                text = text.replace(/commit/gi, "<br><br>commit");
                myArticle.innerHTML = text;
            });
    }

    //console.log(run_afunc());
    getData();
    get_tags();//update the tags
}

//Gets the git tags and puts it into the page.
function get_tags() {
    console.log("get_tags()\n");
    const tagDropDown = document.getElementById("tag");
    //remove all child elements
    tagDropDown.innerHTML = "";
    function getData(pageId) {
        console.log(pageId);
        const myRequest = new Request(`/read/git_tags`);
        fetch(myRequest)
            .then((response) => response.text())
            .then((text) => {
                var tags = text.split("\n");
                for(i=0; i < tags.length - 1; i++) {
                    console.log("index: ");
                    console.log(i);
                    console.log(tags[i]);
                    var op = document.createElement("option");
                    op.setAttribute("value", tags[i].toString());
                    op.innerText = tags[i].toString();
                    tagDropDown.appendChild(op);
                } 
            });
    }

    //console.log(run_afunc());
    getData();
}



function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
