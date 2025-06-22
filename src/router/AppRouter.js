import {  Route, Routes } from 'react-router';
import { ChatPage } from '../pages/ChatPage';


import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={ <AuthRouter /> } >
        
      </Route>

      <Route path="*" element={ <ChatPage /> } />
    </Routes>
  );
};
