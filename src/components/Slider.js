/* eslint-disable */
import React from "react";
/* eslint-enable */

var recettesImages = [
  "boeuf_saute.jpg",
  "poelee_de_veau_aux_carottes_et_oignons.jpg",
  "poelee_gambas.jpg",
  "salade_de_fruits_de_saison.jpg"
];
const imagesPath = "https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/recipes/";

function SliderPages( props ) {
  return (
    <ul className = "slider-pages">
      {(function () {
        let list = [];
        for ( let i = 0; i < props.number; i++ ) {
          list.push(
            <li className = "" key = { i }>
              <button className = "sl-page "></button>
            </li>
          );
        }

        let slideProps = list[0].props;
        let _props = Object.assign({}, slideProps, { className: slideProps.className + "active" });
        list[0] = Object.assign({}, list[0], { props: _props });
        return list;
      })()
      };
    </ul>
  );
}

function ControlsButtons() {
  return (
    <ul className = "bt-controls">
      <li className = "bt-control bt-control-prev">
        <button className = "btn-prev" type = "button" aria-label = "previous slide">
          <i className = "fa fa-chevron-left" aria-hidden = "true"></i>
        </button>
      </li>
      <li className = "bt-control bt-control-next">
        <button className = "btn-next" type = "button" aria-label = "next slide">
          <i className = "fa fa-chevron-right" aria-hidden = "true"></i>
        </button>
      </li>
    </ul>
  );
}

// accessibility to be completed !!
class Slider extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const ln = recettesImages.length;
    const slides = recettesImages.map(( recette, index ) => (
      <li className = "slider-item" key = { index }
        data-index = { index }
        style = {{ "zIndex": -2 * index }}>
        <div className = "slider-image-wrapper" >
          <img className = "slider-image"
            src = { imagesPath + recette + "?raw=true" }
            alt = "" />
        </div>
      </li>
    ));
    return (
      <section>
        <div className = "slider">
          <ul className = "slides">{ slides }</ul>
          <div className = "slider-text-wrapper">
            <div className = "slider-text">
              <p>Where cooking amateurs & lovers meet!</p>
            </div>
          </div>
          <ControlsButtons/>
          <SliderPages number = { ln }/>
        </div>
      </section>
    );
  }
}

export default Slider;
