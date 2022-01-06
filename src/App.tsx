import React, { StrictMode, useEffect, useState } from 'react';
import { Route, BrowserRouter as Switch, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import './App.css';
import List from './components/List';
import MenuAppBar from './components/AppBar';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg"
    }
  ])

  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <header className="App-header">
        <List people={people} />
        <Switch>
          <Routes>
            <Route path="/smu" />         
         </Routes>        
         </Switch>
      </header>
    </div>
  );
}

export default App;
