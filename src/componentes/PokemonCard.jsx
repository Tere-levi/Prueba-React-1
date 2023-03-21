import { useEffect, useState } from "react";


import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const PokemonCard = ({ pokeUrl }) => {

  const [pokeData, setPokeData] = useState({});


  const getPokemon = async () => {
    try {
      const response = await fetch(pokeUrl);

      if (!response.ok) {
        throw {
          msg: "Fallo el consumo de la Api",
          error: 404,
        };
      }
      const data = await response.json();
      setPokeData(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <Card
      style={{ width: "18rem" }}
      className="cards text-start border border-dark"
    >
      <Card.Img
        variant="top"
        className="p-5"
        src={pokeData.sprites?.other?.dream_world?.front_default}
      />
      <Card.Body className="container" style={{ height: "11rem" }}>
        <Card.Title className="alert bg-secondary bg-gradient text-black">
          {pokeData.id}- {pokeData.name}
        </Card.Title>
        <Card.Text className="text-light">
          Experiencia: {pokeData.base_experience}
        </Card.Text>
        <Button variant="danger">Atrapame!</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;