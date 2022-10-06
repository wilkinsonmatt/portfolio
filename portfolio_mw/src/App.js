import React  from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import './App.scss';

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;