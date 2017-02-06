console.log('loaded...');
document.addEventListener('DOMContentLoaded', () => {
  console.log('mounting...');

  const generateEmailButton = document.createElement('button');
  generateEmailButton.innerText = 'Generate Email';
  generateEmailButton.onclick = () => {
    System.import('./email_generator').then(module => {
      module.default();
    })
  };

  document.body.appendChild(generateEmailButton);
});
