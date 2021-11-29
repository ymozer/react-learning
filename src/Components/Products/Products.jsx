import React from 'react';
import imagesPool from '../../images/1_ImagePool';
import { Link } from 'react-router-dom'
import './Products.css';
import { Container, Row, Col } from 'react-bootstrap';


function Product(props){

    const pics = props.images.map((img) =>
      <div className='wrapper'>
        <div className='p_card' key={img.id}>
            <h2 className='p_name'>{img.name}</h2>
            <img className='p_pic' alt='' src={img.src}></img>
            <div className='p_bottom'>
                <h3 className='p_price'>{img.price}</h3>
            </div>
        </div>

      </div>
    );
  
    return (
     <div>
       {pics}
     </div>
    )
} 
  

const images = imagesPool

function Products() {
  return (
    <div className="Products">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
        <Container>
          <Row sm={8}>
            
              <Product images={images} className="Ana" />
            
          </Row>
        </Container>

    </div>
  );
}

export default Products;