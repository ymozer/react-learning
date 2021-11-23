import './App.css';
import imagesPool from './ImagePool';

function Products(props){

  const pics = props.images.map((img) =>
    <div key={img.id}>
      <p>{img.name}</p>
      <img alt='asd' src={img.src}></img>
    </div>
  );

  return (
   <div>
     {pics}
   </div>
  )
} 

const images = imagesPool

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products images={images} />
      </header>
    </div>
  );
}

export default App;
