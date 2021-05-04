import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function App() {
  return (
    <div className="App">
      <style type="text/css">
        {`
        .jumbotron {
            color: #1d252b;
          }
        img {
          object-fit: contain;
          height: 100vh;
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
            Contact information: <a href="mailto:teavern.arts@gmail.com">teavern.arts@gmail.com</a>
          </p>

          <p>
            Do note that this site is heavily in progress.
          </p>
        </Jumbotron>

        <Carousel plugins={['arrows']}>
          <img src="art/1.png"/>
          <img src="art/2.jpg"/>
          <img src="art/3.png"/>
          <img src="art/4.jpg"/>
          <img src="art/5.png"/>
          <img src="art/6.jpg"/>
        </Carousel>
    </div>
  );
}

export default App;
