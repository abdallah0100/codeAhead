import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Recovery from './user/offline/Recovery';
import ProfilePage from './user/online/ProfilePage';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/account_recovery' element={<Recovery />}/>
                <Route path='/profile' element={ <ProfilePage /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;