import React from 'react';
import { BASE_URL } from '../../contants/api';
import { useHero } from '../../pages/heroes/HeroesContext';

import AgiLogo from '../../assets/img/filter-agi.png';
import IntLogo from '../../assets/img/filter-int.png';
import StrLogo from '../../assets/img/filter-str.png';

import { Container, Image, Name } from './HeroPreview.styles';

const Logo = {
  agi: AgiLogo,
  int: IntLogo,
  str: StrLogo,
};

const HeroPreview = ({ id, localized_name, primary_attr }) => {
  const { heroDetails } = useHero();
  return (
    <Container>
      <Image src={`${BASE_URL}${heroDetails[id].img}`} alt={localized_name} />
      <Name>
        <img
          className='h-5 mr-1.5 hidden md:block'
          src={Logo[primary_attr]}
          alt={primary_attr}
        />
        {localized_name}
      </Name>
    </Container>
  );
};

export default HeroPreview;
