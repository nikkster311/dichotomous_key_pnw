import React from 'react';

const buttonOptions = [{
  clicked: "conifer",
  a: "leaves needle-like",
  b: "leaves flattened and scale like"
}, {
  clicked: "leaves needle-like",
  a: "needles clustered",
  b: "needles not clustered"
}, {
  clicked: "leaves flattened and scale like",
  a: "All leaves short and sharp (giant sequoia)",
  b: "some leaves not sharp"
}, {
  clicked: "needles not clustered",
  a: "needles short and sharp (giant sequioa)",
  b: "needles longer than 1/2 inch"
}, {
  clicked: "needles clustered",
  a: "clusters of 2-5 needles (pine)",
  b: "cluster greater than 10"
}, {
  clicked: "All leaves short and sharp (giant sequoia)" //DONE
}, {
  clicked: "some leaves not sharp",
  a: "cones round",
  b: "cones not round"
}, {
  clicked: "needles short and sharp (giant sequioa)" //DONE
}, {
  clicked: "needles longer than 1/2 inch",
  a: "tiny pegs on twigs",
  b: "no pegs on twigs"
}, {
  clicked: "clusters of 2-5 needles (pine)" //DONE
}, {
  clicked: "cluster greater than 10",
  a: "Needles soft (deciduous) (Larch)",
  b: "Needles stiff (evergreen) (True Cedar)"
}];

const Buttons = (props) => {

  return (
    <div className="btnsWrapperWrapper">btnsWrapperWrapper
      <div className="btnsWrapper">btnsWrapper
        <div className="btnAWrapper">
          <button className="btns" value={props.buttonA} onClick={props.change}>{props.buttonA}</button>
        </div>
        <div className="btnBWrapper">
          <button className="btns" value={props.buttonB} onClick={props.change}>{props.buttonB}</button>
        </div>
      </div>
      {props.List === [] ? null : <p>your searched values are: {props.List}</p>}
    </div>
  )
};


export { buttonOptions, Buttons };
