import React from 'react';
import imagesPool from '../../images/1_ImagePool'
import './Products.css';


function Product(props){

    const pics = props.images.map((img) =>
      <div className='wrapper'>
        <div className='p_card' key={img.id}>
            
            <img className='p_pic' alt='' src={img.src}></img>
            <div className='p_bottom'>
            <h2 className='p_name'>{img.name}</h2>
                <h3 className='p_price'>{img.price}</h3>
            </div>
        </div>
      </div>
    );
  
    return (
      <>
      {pics}
      </>
    )
} 
  

const images = imagesPool

function Products() {
  return (
    <div className="Products">
        <Product images={images} />
    </div>
  );
}

export default Products;