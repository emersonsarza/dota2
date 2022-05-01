import React from 'react';

import Filter from './Filter';
import HeroList from './HeroList';
import HeroesProvider from './HeroesContext';
import { Description, Title } from './Heroes.styles';

const Heroes = () => {
  return (
    <HeroesProvider>
      <Title>CHOOSE YOUR HERO</Title>
      <Description>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </Description>
      <Filter />
      <HeroList />
    </HeroesProvider>
  );
};

export default Heroes;
