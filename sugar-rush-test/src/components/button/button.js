import { Content } from "./button-style.js";

function Button({ category, children }) {
  return <Content category={category}>{children}</Content>;
}

export default Button;
