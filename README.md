# CS443/CS553 Term Project
## Data visualization

The tool:
The project is to impliment some of the suggestions of the research paper "Data changes Everything"; citation below. 
We hope to build our data exchange and interaction tool so that we can bring the concepts of version control and shared data to a GUI style application over the web.

This will make the tooling accessible to a entire team at the same time allowing shared development and design of the data visualizations. This combined with aspects of version control will also allow testing of ideas and concepts without losing state.

The projects goals:
* Be accessible from anywhere.
* Realtime feedback options from group of peers.
* Version control of visualizations
* Shared state data visualization.
* Data can be loaded dynamically.
* Bridge the "gap" from the paper between Understanding --> design --> development of data visualizations



### The Data:
- Electrical data over time(for an example)
- In CSV format or other parsable format
- Limited in size for now.

### The Stack:
This is the tech stack and the stuff that constructs the entire application at this moment

1. HTML/CSS frontend
2. JS/webGL
3. web server(Rust rocket or other fast library)
4. CLI tools.

### TODO
1. Define libs used
2. create API for server/client.
3. Find place to run/host code.
4. Evaluate timeline to completion.
5. Write documentation in markdown or latex.


### Logic overview

1. user loads site.
2. Site loads, sends query to server for feedback/updates info.
3. site updates UI
4. User add/updates/modifies data
5. git logs sent too the UI
6. UI updates on page.


*Web Page modules:*
- WebGL window
- WegGL instructions
- WebGL controls/options
- Git log/status window
- Version Dropdown menu(changes to previous git version.)
- Messages/feedback section.
- Data Display tab/menu.
- Login feature

*server modules:*
- cli git commands and updates.
- file/data loading/parsing of csv
- live messaging to from clients.
- pings for new versions of repo/model.
- SQLite3 database for users/data.





## sources:

**Data Changes Everything**
Walny, J., Frisson, C., West, M., Kosminsky, D., Knudsen, S., Carpendale, S., & Willett, W. J.
(2019). Data Changes Everything: Challenges and Opportunities in Data Visualization Design
Handoff. "IEEE Transactions on Visualization and Computer Graphics". 1-11.
http://hdl.handle.net/1880/110696

## Re-sources:
*these are all links to documentation and info on stuff*


**WebGL:**
* https://www.tutorialspoint.com/webgl/webgl_basics.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* https://webglfundamentals.org/
* https://webgl-shaders.com/index.html
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices

**RustRocket:**
* https://rocket.rs/
* https://rocket.rs/v0.5-rc/guide/

**SQLite3:**
* https://www.sqlite.org/index.html
* https://docs.rs/crate/sqlite/latest

**Containers:**
* https://bastillebsd.org/
* https://docs.freebsd.org/en/books/handbook/jails/



