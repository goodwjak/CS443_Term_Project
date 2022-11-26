#[macro_use]
extern crate rocket;

use rocket::form::Form;
//use rocket::http::RawStr;

use std::process::Command;

/*
 * #################################
 * DATA STRUCTS
 * ################################
 */

//Holds the timedate stamp of the feedback and it's text.
#[derive(FromForm)]
struct Feedback {
    day: u64,
    hour: u64,
    min: u64,
    text: String,
}

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
fn create_feedback() -> &'static str {
    "Ok"
}

/*
 * Input: Data for user
 * Output: user data into file/database
 * Desc: Responds with results of creation.
 */
fn create_user() -> &'static str {
    "Ok"
}

/*
 * Input: Data for project
 * Output: project data into file/database
 * Desc: Creates a new instance for project
 */
fn create_project() -> &'static str {
    "Ok"
}

//Read ROUTES

/*
 * Input: NA
 * Output: html
 * Desc: Gets the website html and stuff.
 */
#[get("/")]
fn index() -> &'static str {
    "HTML HERE"
}

/*
 * Input: name of csv file.
 * Output: json
 * Desc: Reads the data from a csv file into json and sends it.
 */
#[get("/data_csv/<filename>")]
fn data_csv(filename: &str) -> &'static str {
    "Nothing for now."
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
 */
#[post("/feedback", data = "<new_feedback>")]
fn update_feedback(new_feedback: Form<Feedback>) -> &'static str {
    //Push data into our global memory/then append it too the file.
    "feedback!"
}

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
        .mount(
            "/read",
            routes![data_csv, git_log, read_feedback, read_webgl_code],
        )
        .mount("/delete", routes![del_feedback])
        .mount("/create", routes![create_feedback])
}
