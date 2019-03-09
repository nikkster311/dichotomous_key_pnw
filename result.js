import React from "react";

class Result extends React.Component{

  render(props) {
    return(
      <section className="resultSection">
        <div className="content-wrap">
          <h3>You're looking at a</h3>
          <h1>{this.props.result}</h1>
        </div>
      </section>

    )
  }
}

export default Result;
