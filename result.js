import React from "react";

class Result extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }


  }

  render(props) {
    return(
      <section className="resultSection">
        <h3>You're looking at a</h3>
        <h1>{this.props.result}</h1>
      </section>

    )
  }
}

export default Result;
