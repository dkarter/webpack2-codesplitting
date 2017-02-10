import { retainedFunction } from './dead_code';

console.log('loaded...');
document.addEventListener('DOMContentLoaded', () => {
  console.log('mounting...');

  retainedFunction();

  const generateEmailButton = document.createElement('button');
  generateEmailButton.innerText = 'Generate Email';
  generateEmailButton.onclick = () => {
    System.import('./email_generator').then(module => {
      module.generateFakeEmail();
    });
  };

  document.body.appendChild(generateEmailButton);
});
