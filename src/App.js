import ProductDiv from './ViewProduct.jsx' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateProductDiv from './UpdateProduct';  

function App() {
  
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<ProductDiv />} />
        
        <Route path="/updateproduct" element={<UpdateProductDiv />} />
      </Routes>
    </Router>
   
  );
}

export default App;
