import { useEffect, useState } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'react-bootstrap';
import { bringCharactersRB } from "./services/apiCalls";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharactersRB()
        .then((resultado) => {
          setCharacters(resultado.data.results);
        })
        .catch((error) => console.log(error));
    }
  });

  return (
    <>
      {characters.length > 0 && (
        <Container>
          <Row>
            {characters.map((character) => {
              return <Col 
                sm={12} lg={6} xl={4} xxl={3}
                key={character.id}
              >{character.name}</Col>;
            })}
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
