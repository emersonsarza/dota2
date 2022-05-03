import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import debounce from 'lodash/debounce';
import { API } from '../../contants/api';

const HeroesContext = createContext();

export const useHero = () => {
  return useContext(HeroesContext);
};

const HeroesProvider = ({ children }) => {
  const heroesRef = useRef();
  const heroDetailsRef = useRef();
  const heroFilteredByAttrRef = useRef();
  const [heroes, setHeroes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [attr, selectAttr] = useReducer((state, value) => {
    if (state === value) {
      setHeroes(heroesRef.current);
      return null;
    }
    setHeroes(heroFilteredByAttrRef.current[value]);
    return value;
  }, null);

  const filterHeroes = useCallback(
    debounce((value) => {
      if (value) {
        setHeroes(
          heroesRef.current.filter(({ localized_name }) =>
            localized_name.toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        setHeroes(heroesRef.current);
      }
      selectAttr(null);
    }, 300),
    []
  );

  const onChangeSearchValue = useCallback(
    (e) => {
      setSearchValue(e.target.value);
      filterHeroes(e.target.value);
    },
    [filterHeroes]
  );

  const filterHeroesByAttr = useCallback((attr) => {
    selectAttr(attr);
    setSearchValue('');
  }, []);

  useEffect(() => {
    const fetchHereoes = async () => {
      const res = await fetch(API.HEROES);
      const data = await res.json();
      heroesRef.current = data;

      const detailsRes = await fetch(API.HERO_DETAILS);
      const detailsData = await detailsRes.json();
      heroDetailsRef.current = detailsData;

      setHeroes(data);

      setTimeout(() => {
        heroFilteredByAttrRef.current = data.reduce(
          (curr, hero) => {
            curr[hero.primary_attr].push(hero);
            return curr;
          },
          { agi: [], str: [], int: [] }
        );
      }, 100);
    };
    fetchHereoes();
  }, []);

  const value = useMemo(
    () => ({
      heroes,
      heroDetails: heroDetailsRef.current,
      searchValue,
      onChangeSearchValue,
      attr,
      filterHeroesByAttr,
    }),
    [attr, filterHeroesByAttr, heroes, onChangeSearchValue, searchValue]
  );

  return (
    <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>
  );
};

export default HeroesProvider;
