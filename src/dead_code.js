import { first } from 'lodash';

export function droppedUnusedFunction() {
  console.log('droppedUnusedFunction');
}

export function retainedFunction() {
  const f = first([3, 2, 1]);
  console.log('I will not be removed.', f);
}
