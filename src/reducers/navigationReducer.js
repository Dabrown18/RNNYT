import { NavitionExperimental } from 'react-native';
import { NAVIGATION_PUSH, NAVIGATION_POP } from '../actions/actionTypes';
import HomeScreen from '../components/HomeScreen';
import IntroScreen from '../components/IntroScreen';

const { StateUtils } = NavigationExperimental;

const routes = {
  home: {
    key: 'home',
    title: 'RNNYT',
    component: HomeScreen
  },
  intro: {
    key: 'intro',
    title: 'Welcome',
    component: IntroScreen
  }
},
const intialState = {
  index: 0,
  routes: [
    routes.intro
  ]
};

export default (state = initialState, action = {}) => {
  if (action.type === NAVIGATION_PUSH) {
    return StateUtils.push(state, routes[action.payload]);
  } elseif (action.type === NAVIGATION_POP) {
    return StateUtils.pop(state);
  }
  return state;
};
