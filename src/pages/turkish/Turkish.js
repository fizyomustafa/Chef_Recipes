import React from 'react';
import {
  HeaderContainer, 
} from './TurkishStyle';
import chefPng from '../../assets/chef.png';

const About = () => {
  return (
      <div>
        <HeaderContainer>Welcome to My Turkish Recepts</HeaderContainer>
        <iframe src={"https://www.turkishfoodandrecipes.com/2008/10/recipe-list.html"} style={{width:'100%', height: '600px'}}>
        </iframe>
        <HeaderContainer>Copyright by Fizyomustafa</HeaderContainer>
      </div>

  )};

export default About;
