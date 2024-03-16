import { Card, Container } from "react-bootstrap";

const Player = ({  //on peut ecrire pros et dans l affichage on ecrit props.name ou bien directement name 
  name,
  image,
  team,
  nationality,
  jerseyNumber,
  age,
  imagee,
}) => {
  return (
    <>
      <Container className="mt-3 mb-4 flex "  >
        <Card style={{ width: "20rem" }} >
          <Card.Img variant="top" src={imagee}  /> 
          <Card.Body >
            <Card.Title>Name : {name}</Card.Title>
            <p>Team : {team}</p>
            <p>Nationality : {nationality}</p>
            <p>Jersey Number : {jerseyNumber}</p>
            <p>Age : {age}</p>
          </Card.Body>
        </Card>
      </Container>
    
      
    </>
  );
};

export default Player;
