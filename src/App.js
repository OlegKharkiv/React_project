import Payment from './Components/Payment';
import Completion from './Components/Completion';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>  
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
