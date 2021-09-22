import Image from "next/image";

import Container from "components/Container";
import Button from 'components/Button';
import Search from "components/Layout/Header/Search";
import Nav from "components/Layout/Header/Nav";

import traveloLogo from "public/assets/travelo-logo-header.png";

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between item-center">
          <div className="flex">
            <Image
              src={traveloLogo}
              alt="travelo logo"
              height="48"
              width="182"
              placeholder="blur"
            />
            <Search />
          </div>
          <div className="flex gap-5">
            <Nav/>
            <Button className="w-[190px]">
              masuk
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
