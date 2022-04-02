import React from 'react';
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from './GithubStyle';
import jrkodaman from '../../assets/juniorkodaman.png';

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={jrkodaman} />
      <HeaderContainer>
        <h1>
          fizyo <span>Mustafa</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h3>I'm also FullStack Developer</h3>
        <a style={{color:'black', fontWeight:'700'}} href="https://github.com/fizyomustafa">This My Github Link <img src="https://pngimg.com/uploads/github/github_PNG42.png" style={{width: '10%'}} alt="" /></a>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
