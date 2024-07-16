import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Landing from './Landing';
import Recovery from './user/offline/Recovery';
import ProfilePage from './user/online/ProfilePage';
import AccessError from './AcessError';
import Index from './forum/Index';
import TopicPage from './forum/subtopics/TopicPage';
import CreateThread from './forum/subtopics/thread/CreateThread';
import ShowThread from './forum/subtopics/thread/ShowThread';

function Router(){
    
    const [access, updateAccess] = React.useState(false);

    React.useEffect(()=>{
        updateAccess(localStorage.getItem("access_token") != null);
    });

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/account_recovery' element={access ? <Landing /> : <Recovery />}/>
                <Route path='/profile' element={ access ? <ProfilePage /> : <AccessError /> } />
                <Route path='/forum' element={<Index logged={access} />} />
                <Route path='/forum/topic' element={<TopicPage />}/>
                <Route path='/forum/topic/create' element={access ? <CreateThread /> : <AccessError />} />
                <Route path='/forum/topic/thread' element={access ? <ShowThread /> : <AccessError />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;