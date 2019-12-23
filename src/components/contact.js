import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Istabrak Jrad</h2>
            <img
              src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/74920862_3059147720976413_6937153776893558784_n.jpg?_nc_cat=100&_nc_ohc=SPuaUbmzyM8AQkxPLRwdYXAJX3wte5AErkd3r0pkqaYlytQK-5GnZ5g3g&_nc_ht=scontent.ftun3-1.fna&oh=ad77263afe34ea780029b43fd4439dde&oe=5E7BB6E1"
              alt="stab"
              style={{ height: "250px" }}
              className="stab-avatar"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Front end Development
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    icon="phone"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i>(+216)56124250</i>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    icon="mail"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i>istabrak.jrad@gmail.com</i>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Chaima Ben Aicha</h2>
            <img
              src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/s960x960/61976147_2265733260407553_2942725829588680704_o.jpg?_nc_cat=101&_nc_ohc=qiFrhXZxmmsAQnflK-FfqbGt4b_YzF2YzuhOMQQTs51KgmcrcQwNyJ0uQ&_nc_ht=scontent.ftun3-1.fna&oh=6474baa768827e726744de309731aade&oe=5E71D2BC"
              alt="chima"
              style={{ height: "250px" }}
              className="chaima-avatar"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Back end Development
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    icon="phone"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i>(+216)28500620</i>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    icon="mail"
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i>chaima.ben.aicha@gmail.com</i>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
