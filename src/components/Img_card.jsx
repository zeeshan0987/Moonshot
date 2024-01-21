/* eslint-disable react/prop-types */
// import React from 'react'
import "../css/Img_card.css";

const Img_card = ({webformatURL,tags}) => {
    let arr = tags.split(",");
  return (
    <div className="img_card">
      <img src={webformatURL} alt="" />
      <div style={{ display: "flex", flexWrap: "wrap" ,gap:'3px', margin:'0.5rem'}}>
        {arr.map((e) => (
          <div key={e} className="card_tag">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Img_card;
