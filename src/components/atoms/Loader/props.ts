export enum LoaderSize {
  small = "small",
  normal = "normal",
}

interface LoaderProps {
  size?: LoaderSize;
  dark?: boolean;
}

export default LoaderProps;
