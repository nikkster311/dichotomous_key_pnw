import React from 'react';

const buttonOptions = [{
  clicked: "More than 13 feet",
  a: "conifer",
  b: "broadleaf"
}, {
  clicked: "conifer",
  a: "leaves needle-like",
  b: "leaves flattened and scale like"
}, {
  clicked: "leaves needle-like",
  a: "needles clustered",
  b: "needles not clustered"
}, {
  clicked: "leaves flattened and scale like",
  a: "All leaves short and sharp",
  b: "some leaves not sharp"
}, {
  clicked: "needles not clustered",
  a: "needles short and sharp",
  b: "needles longer than 1/2 inch"
}, {
  clicked: "needles clustered",
  a: "clusters of 2-5 needles",
  b: "cluster greater than 10"
}, {
  clicked: "All leaves short and sharp" //DONE
}, {
  clicked: "some leaves not sharp",
  a: "cones round",
  b: "cones not round"
}, {
  clicked: "needles short and sharp" //DONE
}, {
  clicked: "needles longer than 1/2 inch",
  a: "tiny pegs on twigs",
  b: "no pegs on twigs"
}, {
  clicked: "clusters of 2-5 needles" //DONE
}, {
  clicked: "cluster greater than 10",
  a: "Needles soft",
  b: "Needles stiff"
}, {
  clicked: "Needles soft" //DONE
}, {
  clicked: "Needles stiff" //DONE
}, {
  clicked: "cones round",
  a: "Cones soft/leathery",
  b: "Cones woody"
}, {
  clicked: "Cones not round",
  a: "Cones resemble rosebuds",
  b: "Cones resemble duck's bill"
}, {
  clicked: "Cones woody",
  a: "Cones under 1/2 inch in diameter",
  b: "Cones over 1/2 inch in diameter"
}, {
  clicked: "Tiny pegs on twigs",
  a: "pegs square, needles sharp",
  b: "pegs rounded, needles blunt"
}, {
  clicked: "no pegs on twigs",
  a: "buds large and pointed",
  b: "buds not large and pointed"
}, {
  clicked: "buds not large and pointed",
  a: "terminal buds round and clustered",
  b: "terminal buds not clustered"
}, {
  clicked: "Terminal buds not clustered",
  a: "Needles white underneath",
  b: "Needles green underneath"
}, {
  clicked: "Needles white underneath",
  a: "Needles pointed",
  b: "Needles blunt"
}, {
  clicked: "broadleaf",
  a: "leaves simple",
  b: "leaves compound"
}, {
  clicked: "leaves compound",
  a: "leaves palmately compound",
  b: "leaves pinnately compound"
}, {
  clicked: "leaves simple",
  a: "leaves opposite",
  b: "leaves alternate"
}, {
  clicked: "leaves opposite",
  a: "leaves lobed",
  b: "leaves not lobed"
}, {
  clicked: "leaves pinnately compound",
  a: "leaf bases alternate",
  b: "leaf bases opposite"
}, {
  clicked: "leaf bases alternate",
  a: "leaflets shorter than 3 inches",
  b: "leaflets longer than 3 inches"
}, {
  clicked: "leaves not lobed",
  a: "leaves heart shaped",
  b: "leaves not heart shaped"
}, {
  clicked: "leaves alternate",
  a: "leaves deeply lobed",
  b: "leaves not deeply lobed"
}, {
  clicked: "leaves deeply lobed",
  a: "leaves palmately lobed",
  b: "leaves pinnately lobed"
}, {
  clicked: "leaves pinnately lobed",
  a: "branches without thorns",
  b: "branches with thorns"
}, {
  clicked: "leaves palmately lobed",
  a: "leaves star-shaped",
  b: "leaves not star-shaped"
}, {
  clicked: "leaflets shorter than 3 inches",
  a: "leaflet margins smooth",
  b: "leaflet margins serrated"
}, {
  clicked: "leaflet margins smooth",
  a: "fruit pods longer than 5 inches",
  b: "fruit pods shorter than 5 inches"
}, {
  clicked: "branches without thorns",
  a: "leaves have fewer than 5 lobes",
  b: "leaves leaves have more than 5 lobes"
}, {
  clicked: "leaves have fewer than 5 lobes",
  a: "leaves have 4 lobes",
  b: "leaves have fewer than 4 lobes"
}, {
  clicked: "Cones soft/leathery" //DONE
}, {
  clicked: "Cones resemble rosebuds" //DONE
}, {
  clicked: "Cones resemble duck's bill" //DONE
}, {
  clicked: "Cones over 1/2 inch in diameter" //DONE
}, {
  clicked: "Cones under 1/2 inch in diameter" //DONE
}, {
  clicked: "Pegs square, needles sharp" //DONE
}, {
  clicked: "pegs rounded, needles blunt" //DONE
}, {
  clicked: "buds large and pointed" //DONE
}, {
  clicked: "terminal buds round and clustered" //DONE
}, {
  clicked: "Needles green underneath" //DONE
}, {
  clicked: "Needles pointed" //DONE
}, {
  clicked: "Needles blunt" //DONE
}, {
  clicked: "Leaves palmately compounded" //DONE
}, {
  clicked: "Leaf bases opposite" //DONE
}, {
  clicked: "Leaves lobed" //DONE
}, {
  clicked: "Leaflets longer than 3 inches" //DONE
}, {
  clicked: "Leaves heart shaped" //DONE
}, {
  clicked: "Leaves not heart shaped" //DONE
}, {
  clicked: "Branches with thorns" //DONE
}, {
  clicked: "Leaves not star-shaped" //DONE
}, {
  clicked: "Leaves star-shaped" //DONE
}, {
  clicked: "Leaflet margins serrated" //DONE
}, {
  clicked: "Fruit pods longer than 5 inches" //DONE
}, {
  clicked: "Fruit pods shorter than 5 inches" //DONE
}, {
  clicked: "Leaves have more than 5 lobes" //DONE
}, {
  clicked: "Leaves have fewer than 4 lobes" //DONE
}, {
  clicked: "Leaves have 4 lobes" //DONE
}];

const resultOptions = [
  {
    clicked: "All leaves short and sharp",
    result: "Giant Sequioa"
  }, {
    clicked: "needles short and sharp",
    result: "Giant Sequioa"
  }, {
    clicked: "clusters of 2-5 needles",
    result: "Pine"
  }, {
    clicked: "Needles soft",
    result: "Larch (Deciduous)"
  }, {
    clicked: "Needles stiff",
    result:  "True Cedar (Evergreen)"
  }, {
    clicked: "Cones soft/leathery",
    result: "Juniper"
  }, {
    clicked: "Cones resemble rosebuds",
    result: "Red Cedar / Arbor vitae"
  }, {
    clicked: "Cones resemble duck's bill",
    result: "Incense-Cedar"
  }, {
    clicked: "Cones under 1/2 inch in diameter",
    result: "White Cedar"
  }, {
    clicked: "Cones over 1/2 inch in diameter",
    result: "Cypress"
  }, {
    clicked: "pegs square, needles sharp",
    result: "Spruce"
  }, {
    clicked: "pegs rounded, needles blunt",
    result: "Hemlock"
  }, {
    clicked: "buds large and pointed",
    result: "Douglas Fir"
  }, {
    clicked: "terminal buds round and clustered",
    result: "True Fir"
  }, {
    clicked: "Needles green underneath",
    result: "Yew"
  }, {
    clicked: "Needles pointed",
    result: "Redwood"
  }, {
    clicked: "Needles blunt",
    result: "Hemlock"
  }, {
    clicked: "leaves palmately compound",
    result: "Buckeye"
  }, {
    clicked: "leaf bases opposite",
    result: "Ash"
  }, {
    clicked: "leaves lobed",
    result: "Maple"
  }, {
    clicked: "leaflets longer than 3 inches",
    result: "Walnut"
  }, {
    clicked: "leaves heart shaped",
    result: "Catalpa"
  }, {
    clicked: "leaves not heart shaped",
    result: "Dogwood"
  }, {
    clicked: "branches with thorns",
    result: "Hawthorn"
  }, {
    clicked: "leaves not star-shaped",
    result: "Sycamore"
  }, {
    clicked: "leaves star-shaped",
    result: "Sweetgum"
  }, {
    clicked: "leaflet margins serrated",
    result: "Mountain Ash"
  }, {
    clicked: "Fruit pods longer than 5 inches",
    result: "Honeylocust"
  }, {
    clicked: "Fruit pods shorter than 5 inches",
    result: "Locust"
  }, {
    clicked: "Leaves have more than 5 lobes",
    result: "Oak"
  }, {
    clicked: "Leaves have 4 lobes",
    result: "Yellow Poplar"
  }, {
    clicked: "Leaves have fewer than 4 lobes",
    result: "Apple/Pear"
  },
];

const Buttons = (props) => {

  return (
    <div className="runningWrapper">
      <div className="content-wrap">
      {props.List === [] ? null : <p className="prevClickedString">your searched values are: {props.List}</p>}
      </div>
      <div className="content-wrap">
        <div className="btnsWrapper">
          <div className="btnAWrapper">
            <button className="btns" value={props.buttonA} onClick={props.change}>{props.buttonA}</button>
          </div>
          <div className="btnBWrapper">
            <button className="btns" value={props.buttonB} onClick={props.change}>{props.buttonB}</button>
          </div>
        </div>
      </div>
    </div>
  )
};


export { buttonOptions, resultOptions, Buttons };
