#[macro_use]
extern crate rocket;

use rocket::form::Form;
use rocket::fs::{relative, FileServer, NamedFile, Options};
use rocket::response::status::NotFound;
use std::path::{Path, PathBuf};
//use rocket::http::RawStr;
use std::process::Command;
//mod preprocessing;

/*
 * #################################
 * DATA STRUCTS
 * ################################
 */

//Holds the timedate stamp of the feedback and it's text.
/*
#[derive(FromForm)]
struct Feedback {
    day: u64,
    hour: u64,
    min: u64,
    text: String,
}
*/

// Holds a single csv record from the example data we chose.
/*
struct _NatualGasRecord {
    msn: String,
    year: u64,
    month: u64,
    value: u64,
    col_order: u64,
    description: String,
    units: String,
}
*/

/*
 * ################################
 *  CRUD for website.
 * ###############################
 */

//Create ROUTES

/*
 * Input: New feedback.
 * Output: feedback to clients.
 * Desc: Sends clients ping to update with created feedback.
 */
#[post("/feedback")]
fn create_feedback() -> &'static str {
    "Ok"
}

//Read ROUTES

#[get("/")]
async fn index() -> Result<NamedFile, NotFound<String>> {
    let path = Path::new("www/index.html");
    NamedFile::open(&path)
        .await
        .map_err(|e| NotFound(e.to_string()))
}

/*
 * Input: NA
 * Output: html
 * Desc: Gets the website html and stuff.
 */
#[get("/static/<file..>")]
async fn files(file: PathBuf) -> Result<NamedFile, NotFound<String>> {
    let path = Path::new("www/").join(file);
    NamedFile::open(&path)
        .await
        .map_err(|e| NotFound(e.to_string()))
}

/*
 * Input: name of csv file.
 * Output: json
 * Desc: Reads the data from a csv file into json and sends it.
 */
#[get("/data_csv/<filename>")]
fn data_csv(filename: &str) -> String {
    let txt: String;
    //ensure the file name is legit.
    if filename.contains(".csv") {
        //Call the system cat command.
        let output = Command::new("cat")
            .arg(filename)
            .output()
            .expect("Failed to execute process.");
        //Add error handling
        txt = String::from_utf8(output.stdout).unwrap();
    } else {
        txt = String::from("Error: not a filename");
    }
    txt
}

/*
 * Input: None,
 * Output: json.
 * Desc: Generates current git log / status.
 */
#[get("/git_log")]
fn git_log() -> String {
    //Call the system git command.
    let output = Command::new("git")
        .arg("log")
        .output()
        .expect("Failed to execute process.");
    //Add error handling
    let txt = String::from_utf8(output.stdout).unwrap();
    txt
}

/*
 * Input: None,
 * Output: json.
 * Desc: Generates current git log / status.
 */
#[get("/git_tags")]
fn git_tags() -> String {
    //Call the system git command.
    let output = Command::new("git")
        .arg("tag")
        .arg("-l")
        .output()
        .expect("Failed to execute process.");
    //Add error handling
    let txt = String::from_utf8(output.stdout).unwrap();
    txt
}

/*
 * Input: request.
 * Output: json.
 * Description: Sends out the newest X amount of feedback.
 */
#[get("/feedback")]
fn read_feedback() -> String {
    //Call unix command to grab the feedback text.
    let output = Command::new("cat")
        .arg("feedback.txt")
        .output()
        .expect("Failed to execute process.");
    //Add error handling
    let txt = String::from_utf8(output.stdout).unwrap();
    txt
}

/*
 * Input: Endpoint and requested webgl_code version.
 * Output: Code as data
 * Description: Gets the requested revision of the webgl code.
 */
#[get("/webgl_code/<version>")]
fn read_webgl_code(version: u64) -> &'static str {
    "webgl code"
}

//Update ROUTES

/*
 * Input: str of feedback.
 * Output: Ack.
 * Description: Updates the recent feedback on the server.
 *
#[post("/feedback", data = "<new_feedback>")]
fn update_feedback(new_feedback: Form<Feedback>) -> &'static str {
    //Push data into our global memory/then append it too the file.
    "feedback!"
}
*/
//Delete ROUTES

/*
 * Input: endpoint
 * Output: ack
 * Description: Deletes requested data.
 */
#[get("/feedback")]
fn del_feedback() -> &'static str {
    //Probably want a user check here.
    "Ok"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        .mount("/static", FileServer::from(relative!("/www")))
        .mount("/project", FileServer::from(relative!("/www/project")))
        .mount(
            "/read",
            routes![data_csv, git_log, git_tags, read_feedback, read_webgl_code],
        )
        .mount("/delete", routes![del_feedback])
        .mount("/create", routes![create_feedback])
}
