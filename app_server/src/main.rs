#[macro_use]
extern crate rocket;

use rocket::form::Form;
//use rocket::http::RawStr;

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
#[get("/read/data_csv/<filename>")]
fn data_csv(filename: &str) -> &'static str {
    "Nothing for now."
}

/*
 * Input: None,
 * Output: json.
 * Desc: Generates current git log / status.
 */
#[get("/read/git_log")]
fn git_log() -> &'static str {
    "GIT LOG HERE"
}

/*
 * Input: request.
 * Output: json.
 * Description: Sends out the newest X amount of feedback.
 */
#[get("/read/feedback")]
fn read_feedback() -> &'static str {
    "Feedback here."
}

/*
 * Input: Endpoint and requested webgl_code version.
 * Output: Code as data
 * Description: Gets the requested revision of the webgl code.
 */
#[get("/read/webgl_code/<version>")]
fn read_webgl_code(version: u64) -> &'static str {
    "webgl code"
}

//Update ROUTES

/*
 * Input: str of feedback.
 * Output: Ack.
 * Description: Updates the recent feedback on the server.
 */
#[post("/update/feedback", data = "<new_feedback>")]
fn update_feedback(new_feedback: Form<Feedback>) -> &'static str {
    "feedback!"
}

//Delete ROUTES

/*
 * Input: endpoint
 * Output: ack
 * Description: Deletes requested data.
 */
#[get("/delete/feedback")]
fn del_feedback() -> &'static str {
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
}
