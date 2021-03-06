import {
  NAVIGATION_PUSH,
  NAVIGATION_POP
} from './actionTypes';

export const push = key => ({
  type: NAVIGATION_PUSH,
  payload: key
});

export const pop = key => ({
  type: NAVIGATION_POP
});
