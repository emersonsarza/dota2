import React from 'react';

import { useHero } from './HeroesContext';
import HeroPreview from '../../components/hero/HeroPreview';

import { EmptyState, HeroListContainer } from './Heroes.styles';

const HeroList = () => {
  const { heroes } = useHero();

  return heroes.length ? (
    <HeroListContainer>
      {heroes.map((hero) => (
        <HeroPreview key={hero.id} {...hero} />
      ))}
    </HeroListContainer>
  ) : (
    <EmptyState>No Heroes match your filter</EmptyState>
  );
};

export default HeroList;
