

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Payment from '../Payment';
import Completion from '../Completion';

// import AnimationOnScroll from '../services/service_script';

import './app.css';
import MainPage from '../mainPage/mainPage';

const App = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/payment" element={<Payment />} /> 
                    <Route path="/completion" element={<Completion />} /> 
                </Routes> 
            </BrowserRouter>
        </main>
    );
}

export default App;