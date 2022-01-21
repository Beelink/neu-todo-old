import parse from "html-react-parser";
import { FunctionComponent } from "react";
import ContentViewerProps from "./props";

const ContentViewer: FunctionComponent<ContentViewerProps> = ({ content }) => {
  const parsed = parse(content);
  return <>{parsed}</>;
};

export default ContentViewer;
