import React from "react";
import Link from "next/link";
const PokeCard = ({ pokemon }) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img
            className="pokemon-image"
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={`${pokemon.name}`}
          />
          <div className="details">
            <div className="content">
              <h2>
                #{`${pokemon.id}`} {`${pokemon.name}`}
              </h2>
              <Link href={`/pokemon/${pokemon.id}`}>
                <a className="button">Stats</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeCard;

{
  /* <Link href={`/pokemon/${pokemon.id}`}>
  <a>
    <img
      src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
      alt={`${pokemon.name}`}
    />
    <h3>{`${pokemon.name}`}</h3>
  </a>
</Link>; */
}
