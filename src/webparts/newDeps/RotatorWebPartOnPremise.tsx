// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { INewDepsWebPartProps } from './INewDepsWebPartProps';
import NewDeps from './components/NewDeps';


// Expose React to window -> required for external template loading
// require('expose-loader?React!react');

export default class RotatorWebPartOnPremise {

  private domElement: Element;
  public properties: INewDepsWebPartProps;

  public constructor(dom: Element, props: INewDepsWebPartProps) {
    this.properties = props;
    this.domElement = dom;

    this.onInit();
    this.render();
  }

  public render(): void {

    const element = (
      <NewDeps {...this.properties} />
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit() {
  }

  private loadItems() {
  }

}


