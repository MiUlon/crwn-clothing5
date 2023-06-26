import Home from './routes/home/home.components';
import { Routes, Route, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I'm navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
