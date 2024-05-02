import styled from "styled-components";

export const Content = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2rem;
  color: #ffffff;
  max-width: 10rem;

  background-color: ${(props) => {
    switch (props.category) {
      case "primary":
        return "#c00044";

      case "secondary":
        return "#ffffff";

      default:
        return "#c00044";
    }
  }};

  color: ${(props) => {
    switch (props.category) {
      case "primary":
        return "#ffffff";

      case "secondary":
        return "#c00044";

      default:
        return "#ffffff";
    }
  }};

  border: 1px solid
    ${(props) => {
      switch (props.category) {
        case "primary":
          return "#ffffff";

        case "secondary":
          return "#c00044";

        default:
          return "#ffffff";
      }
    }};
`;
