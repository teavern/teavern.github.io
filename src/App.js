
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageGallery from "./ImageGallery.js"

function App() {
  return (
    <div className="App">
      <style type="text/css">
        {`
        .jumbotron {
            color: #1d252b;
          }
        .galleryImage {
          object-fit: contain;
          width: 60vh;
          height: 60vh;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 70pt;
        }
        p {
          font-family: 'Raleway', sans-serif;
          font-size: 20pt;
        }
        `}
      </style>
        <Jumbotron>
          <h1>Teavern Arts</h1>
          <p>
            Hi there! I am an artist who primarily deals with fantasy settings and fantasy creatures. 
            Please check out my art below!
          </p>
          <p>
            Contact information: <a href="mailto:teavern.draws@gmail.com">teavern.draws@gmail.com</a>
          </p>

          <p>
            Do note that this site is heavily in progress.
          </p>
        </Jumbotron>
        <ImageGallery/>
    </div>
  );
}
export default App;
