import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recovery from './user/offline/Recovery';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<></>} />
                <Route path='/account_recovery' element={<Recovery />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;