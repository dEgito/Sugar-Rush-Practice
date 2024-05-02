import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;

  font-family: "Comfortaa", sans-serif;
  color: #585858;

  section {
    display: flex;
    flex-direction: row;
    padding: 2rem 10rem;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
      padding: 2rem 4rem;
    }
  }
`;

export const Wave = styled.img`
  width: 100%;
  max-height: 5rem;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  box-sizing: border-box;

  background-color: #f2c3cb;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  width: 100%;

  & > img {
    width: 100%;
    max-width: 4rem;
    min-width: 2rem;
  }

  & > div {
    display: flex;
    flex-direction: row;
    width: 40%;
    align-items: center;
    justify-content: space-around;
  }

  a {
    color: #c00044;
    font-weight: 900;
  }

  @media (max-width: 600px) {
    padding: 1rem 4rem;
  }
`;


export const Banner = styled.section`
  background-color: #f2c3cb;
  flex-wrap: wrap;

  & > div {
    & > img {
      width: 100%;
      max-width: 30rem;
      min-width: 10rem;
    }
    p {
      color: #5e2806;
      font-size: 2rem;
      text-shadow: -1px 1px #ffffff, -2px 2px #5e2806;
    }

    @media (max-width: 600px) {
      & > img {
      }
      p {
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        text-shadow: -0.5px 0.5px #ffffff, -1px 1px #5e2806;
      }
    }
  }

  img {
    max-width: 25rem;
  }
`;

export const AboutUs = styled.section`
  background-color: #ffffff;
  flex-wrap: wrap-reverse;

  & > div {
    max-width: 30rem;

    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  & > img {
    max-width: 20rem;
  }

  @media (max-width: 600px) {
    & > div {
      align-items: center;
      text-align: center;
    }
  }
`;

export const Products = styled.section`
  background-color: #cf2762;
  padding: 4rem 0rem;
  flex-wrap: wrap;
`;

export const Card = styled.img`
  max-width: 14rem;
`;
