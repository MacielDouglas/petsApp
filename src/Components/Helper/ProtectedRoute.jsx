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
    return (
      <>
        <h1>Carregando...</h1>
      </>
    );
  }
};

// função funciona corretamente, porem ao fazer refresh ele mostra a area de Login e entre lago em seguida
//   const ProtectedRoute = ({ children }) => {
//     const { login } = React.useContext(UserContext);

//     return login ? children : <Navigate to="/login" />;
//   };
// };

export default ProtectedRoute;
