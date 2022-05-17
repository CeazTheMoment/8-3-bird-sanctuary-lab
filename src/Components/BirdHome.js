import React from "react";
import "./BirdHome.css";

class BirdHome extends React.Component {
  render() {
    const { birds, addToCart } = this.props;
    return (
      <section id="birdPlace">
        {birds.map((bird) => {
          const { name, amount, img, id } = bird;
          return (
            <article className="card birds" key={id}>
              <h3>{name}</h3>
              <p>Price: ${amount}</p>
              <img src={img} alt={name} width="300" height="300" />

              <button onClick={addToCart} type="button" value={id}>
                Adopt
              </button>
            </article>
          );
        })}
      </section>
    );
  }
}

export default BirdHome;