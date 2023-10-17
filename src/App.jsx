import { useEffect, useState } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from 'react-bootstrap';
import { bringCharactersRB } from "./services/apiCalls";
import { DropDownRB } from "./common/DropDownRB/DropDrownRB";

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

  const manejadoraDropdown = (e) => {
    console.log(e)
  }

  return (
    <>
      {characters.length > 0 && (
        <Container>
          <Row>
            {/* {characters.map((character) => {
              return <Col 
                sm={12} lg={6} xl={4} xxl={3}
                key={character.id}
              >{character.name}</Col>;
            })} */}

            <Col>
              <DropDownRB 
                array={characters}
                functionHandler={manejadoraDropdown}
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
