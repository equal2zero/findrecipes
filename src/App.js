import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './component/recipe.component';


const App = () =>{

  const APP_ID = "9e1eab25";
  const APP_KEY = "9d731188fb1f923cb14dacbc565c7740";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] =useState("");
  const [update, setUpdate] = useState('chicken')
  
  useEffect( () =>{
    getRecipes();
  }, [update]);

  const getUpdate = e => {
    e.preventDefault();
    setUpdate(search);
    setSearch('');
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${update}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  

  return (
    <div className="App">
      <h2>Recipe Finder</h2>
      <form onSubmit={getUpdate} className="search">
        <input className="searchfield" type="text" value={search} onChange={updateSearch}/>
        <button className="searchbutton" type="submit">Search</button>
      </form>
      <div className="fixup2">
      {recipes.map(item => (
        <Recipe key={item.recipe.label}
        title ={item.recipe.label} 
        calories ={item.recipe.calories} 
        image={item.recipe.image}
        ingred={item.recipe.ingredients}
        share={item.recipe.url} 
        ctype={item.recipe.cuisineType} 
        servesss={item.recipe.yield} 
        />
      ))}
      </div>
    </div>
  );



  
      
};

export default App;



//Sources Used:
//https://reactjs.org/docs/getting-started.html
//https://developer.mozilla.org/en-US/
//https://www.youtube.com/c/Freecodecamp
//https://www.youtube.com/c/DevEd
//https://www.youtube.com/user/codingblocks
//https://www.w3schools.com/
//https://www.youtube.com/c/WebDevSimplified
//https://www.geeksforgeeks.org/
//https://www.techup.co.in/
//https://stackoverflow.com/
//Lecture Notes
//API used : https://www.edamam.com/ 
