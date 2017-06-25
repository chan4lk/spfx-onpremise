import RotatorWebPartOnPremise from './RotatorWebPartOnPremise';

const webparts: NodeListOf<Element> =
  document.getElementsByClassName('webpart-script-example');

for (let i: number = 0; i < webparts.length; i++) {
  // Get the data property from the Element
  let properties = {};
  try {
    const props: string = webparts[i].getAttribute('data-properties').toString();
    // decode and parse json.
    properties = JSON.parse(decodeURIComponent(props));
  } catch (e) {
    properties = {'description': 'Error reading properties'};
  }
  new RotatorWebPartOnPremise(webparts[i], properties);

}
