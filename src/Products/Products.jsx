import imagesPool from '../images/1_ImagePool';
import './Products.css';

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
    <div className="App">
      <header className="App-header">
        <Product images={images} className="Ana" />
      </header>
    </div>
  );
}

export default Products;