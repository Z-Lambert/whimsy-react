declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.png' {
    const value: any;
    export = value;
}

declare module "*.svg" {
  const ReactComponent: any;
  export { ReactComponent };
}