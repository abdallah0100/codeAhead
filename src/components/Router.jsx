import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;