import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import { HomeImg, MainContainer, ImgDiv } from './HomeStyle';
import chefMusty from '../../assets/chef.png';
import RecipeCardComp from './RecipeCardComp';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
const APP_ID = 'fa255c54';
const APP_KEY = '864a82802664a50366c68f2ca424dad1';

const Home = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url);
      console.log(result.data.hits);
      if (result.data.more) {
        console.log('no food a this name');
      }
      setRecipes(result.data.hits);
      setQuery('');
    } else {
      console.log('Please fill the form');
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg style={{width: '30%'}} src={chefMusty} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
