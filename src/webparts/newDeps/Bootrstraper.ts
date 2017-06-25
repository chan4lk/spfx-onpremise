import RotatorWebPartOnPremise from './RotatorWebPartOnPremise';
const config: any = require('./NewDepsWebPart.manifest.json');

const webparts: NodeListOf<Element> =
  document.getElementsByClassName('webpart-script-example');

for (let i: number = 0; i < webparts.length; i++) {
  // Get the data property from the Element
  const description: string = webparts[i].getAttribute('data-description').toString();
  new RotatorWebPartOnPremise(webparts[i], {description: description});

}
