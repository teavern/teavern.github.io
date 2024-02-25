
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home/home.js'
import Layout from './Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Commissions from './Commissions/commissions'
import Gallery from './Gallery/Gallery.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
