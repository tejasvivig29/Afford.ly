/**
 * Developed by-
 *
 * Name : Sarabjeet Singh
 * Banner ID : B00847541
 * Email ID : sarabjeet.singh@dal.ca
 *
 * Feature Covered:
 * This file is a front-end for app Footer which contains the links for various company and product details.
 */

import React, { Component } from "react";
import "../stylesheets/Footer.css";
import "font-awesome/css/font-awesome.min.css";

/**
 * Footer for the pages. This is common for all the pages.
 *
 * MDBootstrap framework has been used for creating it. To be specific, footer tag/element from the
 * react-bootstrap have been used.
 * The design has been tweaked according to the requirement.
 *
 * Tweaks :
 *
 * 1. Links moved to middle.
 * 2. Link name and enable/disable status has been changed according to the requirement.
 * 3. Form Control element has been tweaked to get the email address from the user to subscribe.
 * 4. Button element has been tweaked to serve it as a subscribe button.
 */

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="font-small ">
        <section style={{ backgroundColor: "#212529" }}>
          <section className="container">
            <section className="row py-4 d-flex align-items-center">
              <section className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0" style={{ color: "white" }}>
                  Get connected with us on social networks!
                </h6>
              </section>

              <section className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="fb-ic" href="#!">
                  <i className="fa fa-facebook-f fa-lg mr-4 footer-text"> </i>
                </a>
                <a className="tw-ic" href="#!">
                  <i className="fa fa-twitter mr-4 fa-lg footer-text"> </i>
                </a>
                <a className="gplus-ic" href="#!">
                  <i className="fa fa-google-plus mr-4 fa-lg footer-text"> </i>
                </a>
                <a className="li-ic" href="#!">
                  <i className="fa fa-linkedin mr-4 fa-lg footer-text"> </i>
                </a>
                <a className="ins-ic" href="#!">
                  <i className="fa fa-instagram mr-4 fa-lg footer-text"> </i>
                </a>
              </section>
            </section>
          </section>
        </section>

        <section className="container text-center text-md-left mt-5">
          <section className="row mt-3">
            <section className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Afford.ly</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "120px" }}
              />
              <p>
                One stop shop to buy and sell items. Affordly is where you can
                afford and enjoy at the same time.
              </p>
            </section>

            <section className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 + "px" }}
              />
              <p>
                <a href="/incident">Raise a Support Ticket</a>
              </p>
              <p>
                <a href="/about">About Us</a>
              </p>
              <p>
                <a href="#!">Privacy Policies</a>
              </p>
              <p>
                <a href="/discussion">Discussion Forum</a>
              </p>
              <p>
                <a href="/careers">Career</a>
              </p>
            </section>
            <section className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 + "px" }}
              />
              <p>
                <i className="fa fa-home mr-3"></i> Halifax, NS B3J 2K9, Canada
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i> affordly123@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> + 01 123 456 789
              </p>
              <p>
                <i className="fa fa-print mr-3"></i> + 01 123 456 789
              </p>
            </section>
          </section>
        </section>

        <section className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/"> afford.ly</a>
        </section>
      </footer>
    );
  }
}

export default Footer;
