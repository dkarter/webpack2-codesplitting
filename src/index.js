console.log('loaded...');
document.addEventListener('DOMContentLoaded', () => {
  console.log('mounting...');
  const button = document.createElement('button');
  button.innerText = 'Click the button';
  button.onclick = () => {
    System.import('./imageviewer').then(module => {
      console.log('module', module);
      module.default();
    })
  };

  document.body.appendChild(button);
});
