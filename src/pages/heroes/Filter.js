import React from 'react';

import AgiLogo from '../../assets/img/filter-agi.png';
import IntLogo from '../../assets/img/filter-int.png';
import StrLogo from '../../assets/img/filter-str.png';

import { Filter } from './Heroes.styles';
import { useHero } from './HeroesContext';

const FilterHeroes = () => {
  const { attr, filterHeroesByAttr, searchValue, onChangeSearchValue } =
    useHero();

  const onFilterByAttr = (attribute) => () => {
    if (attr && attribute === attr) {
      filterHeroesByAttr('');
    } else {
      filterHeroesByAttr(attribute);
    }
  };

  return (
    <Filter>
      <span className='p-3'>Filter Heroes</span>
      <span className='p-1 flex justify-center md:justify-start'>
        <div className=' flex items-center'>
          <span>Attribute</span>
          <span className='flex ml-4'>
            <img
              onClick={onFilterByAttr('str')}
              className={`cursor-pointer ${
                attr === 'str' ? 'opacity-100 translate-y-0.5' : 'opacity-70'
              } hover:opacity-100 hover:drop-shadow`}
              src={StrLogo}
              alt='str'
            />
            <img
              onClick={onFilterByAttr('agi')}
              className={`cursor-pointer ${
                attr === 'agi' ? 'opacity-100 translate-y-0.5' : 'opacity-70'
              } hover:opacity-100 hover:drop-shadow`}
              src={AgiLogo}
              alt='agi'
            />
            <img
              onClick={onFilterByAttr('int')}
              className={`cursor-pointer ${
                attr === 'int' ? 'opacity-100 translate-y-0.5' : 'opacity-70'
              } hover:opacity-100 hover:drop-shadow`}
              src={IntLogo}
              alt='int'
            />
          </span>
        </div>
      </span>
      <span className='p-1 flex justify-center md:justify-start'>
        <div className='relative w-full border max-w-xs'>
          <span className='absolute inset-y-0 left-0 flex items-center'>
            <div className='p-1 pl-2'>
              <svg
                fill='none'
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                className='w-6 h-6'
              >
                <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </div>
          </span>
          <input
            className='h-12 w-full text-sm font-bold bg-transparent pl-10 outline-none'
            onChange={onChangeSearchValue}
            value={searchValue}
          />
        </div>
      </span>
    </Filter>
  );
};

export default FilterHeroes;
