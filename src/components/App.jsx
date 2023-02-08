
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from "hooks/useAuth";

import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';

import Nav from "./navigation/Nav";
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>) : (
    <Routes>
      <Route path="/" element={<Nav />}>

        <Route index element={<HomePage />} />
        <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        /> 
        <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        
      </Route>

      <Route path="*" element={<div>Nothing</div>} />

      </Routes>
      
  );
}


