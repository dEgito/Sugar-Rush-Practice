import {
  Container,
  Navbar,
  Button,
  Banner,
  Wave,
  AboutUs,
  Products,
  Card,
} from "./home-style";
import SmallLogo from "../../assets/sr-logo.png";
import Logo from "../../assets/extended-logo.png";
import ThreeDonnut from "../../assets/three-donnuts.png";
import TwoDonnut from "../../assets/two-donnuts.png";
import TopWave from "../../assets/top-light-wave.png";
import BottomWave from "../../assets/bottom-dark-wave.png";
import Card1 from "../../assets/card-1.png";
import Card2 from "../../assets/card-2.png";
import Card3 from "../../assets/card-3.png";
import Card4 from "../../assets/card-4.png";

function Home() {
  return (
    <Container>
      <Navbar>
        <img src={SmallLogo} alt="logo" />

        <Button type="button">Login</Button>
      </Navbar>

      <Banner>
        <div>
          <img src={Logo} alt="logo" />
          <p>Doçura em alta velocidade</p>
        </div>

        <img src={ThreeDonnut} alt="donnut" />
      </Banner>

      <Wave src={TopWave} alt="wave" />

      <AboutUs>
        <img src={TwoDonnut} alt="donnut" />
        <div>
          <div>
            <h2>Sobre nós</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <Button>Saiba mais</Button>
        </div>
      </AboutUs>

      <Wave src={BottomWave} alt="wave" />

      <Products>
        <Card src={Card1} />
        <Card src={Card2} />
        <Card src={Card3} />
        <Card src={Card4} />
      </Products>
    </Container>
  );
}

export default Home;
