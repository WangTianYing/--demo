import * as Types from '../action-types';

export function increment() {
  return {type: Types.INCREMENT};
}

export function decrement() {
  return {type: Types.DECREMENT};
}

export function reset() {
  return {type: Types.RESET};
}

