import { Routes, Route } from 'react-router-dom';

import MainGame from './components/MainGame';
import Gacha from './components/Gacha';

function Main(){
    return(
        <Routes>
            <Route path='/' element={<MainGame/>} />
            <Route path='/lucky' element={<Gacha/>} />
        </Routes>
    );
}

export default Main;