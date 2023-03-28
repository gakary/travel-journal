import React from "react";

function Card(props) {
  const Rule = ({ color }) => (
    <hr
      style={{
        borderColor: color,
        width: 570,
      }}
    />
  );

  const upperCaseLocation = props.location.toUpperCase().split("").join(" ");
  // Converting location to uppercase and adding spaces between each character

  return (
    <div>
      <section className="card-section">
        <img src={props.imageUrl} className="place-img" />
        <div className="info">
          <div className="location">
            <p className="fa-solid fa-location-dot"></p>
            <p className="location-place">{upperCaseLocation}</p>
            <a href={props.googleMapsUrl}>View on Goolge Maps</a>
          </div>
          <h1 className="place">{props.title}</h1>
          <div className="date">
            <p>
              {props.startDate} - {props.endDate}
            </p>
          </div>
          <p className="desc">{props.description}</p>
        </div>
      </section>
      <Rule color="#F5F5F5" />
    </div>
  );
}

export default Card;
