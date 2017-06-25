declare interface INewDepsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'newDepsStrings' {
  const strings: INewDepsStrings;
  export = strings;
}
