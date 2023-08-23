
import Card from 'react-bootstrap/Card';



function Player({joueur}) {
  
  return (
    <div className='card-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='card-img' variant="top" src={joueur.image} />
      <Card.Body>
        <Card.Title><p>Player: <span>{joueur.name}</span></p></Card.Title>
        <Card.Text><p>Team: <span>{joueur.team}</span></p></Card.Text>
        <Card.Text><p>Nationality: <span>{joueur.nationality}</span></p></Card.Text>
        <Card.Text><p>JerseyNumber: <span>{joueur.jerseyNumber}</span></p></Card.Text>
        <Card.Text><p>Age: <span>{joueur.age}</span></p></Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    
  );
}

export default Player;