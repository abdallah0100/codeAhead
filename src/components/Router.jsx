import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import User from './user/User';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/user' element={<User />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;