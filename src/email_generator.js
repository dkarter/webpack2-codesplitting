import { internet } from 'faker';

export function generateFakeEmail() {
  console.log('Initializing email generator');
  const emailDiv = document.createElement('div');
  emailDiv.innerText = internet.email().toLowerCase();
  document.body.append(emailDiv);
}

export function willBeDroppedByTreeShaking() {
  return 'foobar';
}
