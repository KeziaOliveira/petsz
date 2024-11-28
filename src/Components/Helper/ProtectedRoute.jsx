// Verifica e só da acesso se o usuário estiver logado
import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

// const ProtectedRoute = ({ children }) => {
//   const { login } = React.useContext(UserContext);
//   return login ? children : <Navigate to="/login" />;
// };

export default ProtectedRoute;
