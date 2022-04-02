import React from 'react';
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from './AboutStyle';
import chefPng from '../../assets/chef.png';

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={chefPng} />
      <HeaderContainer>
        <h1>
          CHEF <span>Mustafa</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Mustafa Yalçın</h2>
        <h3>I’m from MENGEN / BOLU / TURKEY</h3>
        <h4>
          Mengen is the place where nature is full of green and people are satisfied with food.
        </h4>
        (Doğanın yeşile, insanın yemeğe doyduğu yerdir Mengen...)
        <h2>
          <a href="mailto:fizyomustafa@gmail.com">Send E-mail</a> :
          fizyomustafa@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
