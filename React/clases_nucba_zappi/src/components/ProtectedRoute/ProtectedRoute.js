import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirecTo }) => {
  const { currentUser } = useSelector(state => state.user);

  return currentUser ? (
    children
  ) : (
    <Navigate
      to={redirecTo}
      state={{
        redirectedFromCheckout: true,
      }}
    />
  );
};

export default ProtectedRoute;
