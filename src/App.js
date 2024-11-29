import ProductDiv from './ViewProduct.jsx' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateProductDiv from './UpdateProduct';  

function App() {
  
  return (
    <Router>
      <Routes>
        {/* Main page displaying the list of products */}
        <Route path="/" element={<ProductDiv />} />
        
        {/* Route to display the update page for a product */}
        <Route path="/updateproduct" element={<UpdateProductDiv />} />
      </Routes>
    </Router>
   
  );
}

export default App;
