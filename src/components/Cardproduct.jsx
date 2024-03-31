import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduct({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} height={200} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    </Card>
  );
}

export default CardProduct;