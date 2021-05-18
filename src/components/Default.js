import React, {Component} from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>Crash</h1>
            <h2>Disconnect from the earth</h2>
            <h3>
              Your visiting address{" "}
              <span className="text-danger">
                "{this.props.location.pathname}"
              </span>{" "}
              Could not find it
            </h3>
          </div>
        </div>
      </div>
    );
  }
}