import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{message}</p>
              <a className="button btn contact-me" href="mailto: adi.bhagwat12@gmail.com">Contact Me</a>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
