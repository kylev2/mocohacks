import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Iframe from "react-iframe";
import "../styles/Schedule.css"

function Schedule() {
  return (
    <>
      {/* <div className="scheduleTitle">
          <Fade right>
            <h1 className="title">Schedule</h1>
          </Fade>
  </div>*/}

      <div className="pageRight schedule">
        <section className="schedule">

          <div className="container">

            <div className="body">
              <center>
                <h1 className="title">Schedule</h1>
              </center>
              <Tabs >
                <TabList
                  style={{
                    display: "grid",
                    "grid-template-columns":
                      "repeat(auto-fill, minmax(400px, 1fr))",
                    listStyle: "none",
                    paddingLeft: "0",
                    marginBottom: "0",
                  }}
                >
                  <Tab
                    style={{
                      cursor: "pointer",
                      padding: "15px",
                      "text-align": "center",
                      "border-top-left-radius": "3px",
                      "border-top-right-radius": "3px",
                    }}
                  >
                    Friday
                </Tab>
                  <Tab
                    style={{
                      cursor: "pointer",
                      padding: "15px",
                      "text-align": "center",
                      "border-top-left-radius": "3px",
                      "border-top-right-radius": "3px",
                    }}
                  >
                    Saturday
                </Tab>
                  <Tab
                    style={{
                      cursor: "pointer",
                      padding: "15px",
                      "text-align": "center",
                      "border-top-left-radius": "3px",
                      "border-top-right-radius": "3px",
                    }}
                  >
                    Sunday
                </Tab>
                </TabList>

                <TabPanel>
                  <table id="friday">

                    <Iframe
                      url="https://airtable.com/embed/shriTHrYC6Zy4XufI?backgroundColor=pink&layout=card&viewControls=on"
                      width="100%"
                      height="533"
                      frameBorder="0"
                      className="airtable-embed"
                      style={{ background: "transparent", border: "1px solid #ccc" }}
                    />

                  </table>
                </TabPanel>
                <TabPanel>
                  <table id="saturday">
                    <Iframe
                      url="https://airtable.com/embed/shrctLRr0kv9xlQUX?backgroundColor=pink&layout=card&viewControls=on"
                      width="100%"
                      height="533"
                      frameBorder="0"
                      className="airtable-embed"
                      style={{ background: "transparent", border: "1px solid #ccc" }}
                    />
                  </table>
                </TabPanel>
                <TabPanel>
                  <table id="sunday">
                    <Iframe
                      url="https://airtable.com/embed/shrnufXqYwG9oBb9a?backgroundColor=pink&layout=card&viewControls=on"
                      width="100%"
                      height="533"
                      frameBorder="0"
                      className="airtable-embed"
                      style={{ background: "transparent", border: "1px solid #ccc" }}
                    />
                  </table>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>


      </div>

    </>


  )
}

export default Schedule;