import logo from './logo.svg';
import './App.css';
import Recipes from './Recipes';
import User from './User';
import { Navigate, Route, Routes } from 'react-router-dom';
import EachRecipe from './EachRecipe';
import Search from './Search';
import RecipeSearch from './RecipeSearch';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Search/>}>
    
  <Route exact path='/' element={<Recipes />}/>
  {/* <Route path='/:id' element={<Recipes2/>}/> */}
  <Route path='/search' element={<RecipeSearch />}/>
  {/* <Route path='/search/:id' element={<RecipeSearch />}/> */}
  </Route>
  <Route path='/eachrecipe/:id' element={<EachRecipe />}/>
</Routes>

{/* <User /> */}

</>
  );
}

export default App;
