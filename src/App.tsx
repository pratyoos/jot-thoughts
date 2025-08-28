import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { isLoggedIn } from './utils/auth';
import type { JSX } from 'react';
import ScrollToTop from './utils/ScrollToTop';

// PrivateRoute wrapper
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => {
          if (route.protected) {
            // Protected route
            return (
              <Route
                key={index}
                path={route.path}
                element={<PrivateRoute>{route.element}</PrivateRoute>}
              />
            );
          }
          // Public route
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;