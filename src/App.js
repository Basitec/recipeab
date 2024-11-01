import logo from './logo.svg';
import './App.css';
import Recipes from './Recipes';
import User from './User';
import { Navigate, Route, Routes } from 'react-router-dom';
import EachRecipe from './EachRecipe';
import Search from './Search';
import RecipeSearch from './RecipeSearch';
import Recipes2 from './Recipes2';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Search/>}>
    
  <Route exact path='/' element={<Recipes />}/>
  <Route path='/1' element={<Navigate to={'/'}/>}/>
  <Route path='/:id' element={<Recipes2/>}/>
  <Route path='/search/:id' element={<RecipeSearch />}/>
  </Route>
  <Route path='/eachrecipe/:id' element={<EachRecipe />}/>
</Routes>

{/* <User /> */}

</>
  );
}

export default App;
