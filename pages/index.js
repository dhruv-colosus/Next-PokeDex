import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import PokeCard from "../components/PokeCard";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon();
  }, []);

  const aclist = pokemon.slice(0, 100);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>PokeDex</title>
        </Head>
        <h1 className={styles.titlee}>POKEDEX</h1>
        <div className={styles.grid}>
          {aclist.map((pokemon) => {
            return (
              <>
                <PokeCard key={pokemon.id} pokemon={pokemon} />;
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
