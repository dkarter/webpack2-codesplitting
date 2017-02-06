import faker from 'faker';

export default () => {
  console.log('Initializing generator');
  const emailDiv = document.createElement('div');
  emailDiv.innerText = faker.internet.email().toLowerCase();
  document.body.append(emailDiv);
}
