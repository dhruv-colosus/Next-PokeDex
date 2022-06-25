import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Details.module.css";

// export async function getServerSideProps({ params }) {
//   const resp = await fetch(
//     `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
//   );
//   return {
//     props: {
//       pokemon: await resp.json(),
//     },
//   };
// }

export async function getStaticPaths() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  const pokemon = await resp.json();

  return {
    paths: pokemon.map((pokemon) => ({
      params: { id: pokemon.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
    // revalidate: 30,
  };
}

export default function Details({ pokemon }) {
  //   const {
  //     query: { id },
  //   } = useRouter();

  //   const [pokemon, setPokemon] = useState(null);

  //   useEffect(() => {
  //     async function getPokemon() {
  //       setPokemon(await resp.json());
  //     }
  //     if (id) {
  //       getPokemon();
  //     }
  //   }, [id]);

  //   if (!pokemon) {
  //     return null;
  //   }

  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div className={styles.backtohome2}>
        <Link href="/">
          <a className={styles.backtohome}> - Return </a>
        </Link>
      </div>
      <div className={styles.layout}>
        <div>
          <img
            className={styles.picture}
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
            alt={pokemon.name.english}
          />
        </div>
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(", ")}</div>

          <table className={styles.container}>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
