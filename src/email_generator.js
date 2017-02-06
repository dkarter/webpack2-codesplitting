import { internet } from 'faker';

console.log('Required email generator');

export function generateFakeEmail() {
  const emailDiv = document.createElement('div');
  emailDiv.innerText = internet.email().toLowerCase();
  document.body.append(emailDiv);
}

export function willBeDroppedByTreeShaking() {
  return 'foobar';
}
