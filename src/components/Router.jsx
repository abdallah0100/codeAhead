import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Landing from './Landing';
import Recovery from './user/offline/Recovery';
import ProfilePage from './user/online/ProfilePage';
import AccessError from './AcessError';
import Index from './forum/Index';

function Router(){
    let access = false;

    React.useEffect(()=>{
        access = localStorage.getItem("access_token") != null;
    });

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/account_recovery' element={access ? <Landing /> : <Recovery />}/>
                <Route path='/profile' element={ access ? <ProfilePage /> : <AccessError /> } />
                <Route path='/forum' element={<Index logged={access} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;