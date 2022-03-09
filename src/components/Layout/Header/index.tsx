import Image from "next/image";

import Container from "components/Container";
import Button from "components/Button";
import Search from "components/Layout/Header/Search";
import Nav from "components/Layout/Header/Nav";

import traveloLogo from "public/assets/travelo-logo-header.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between item-center">
          <div className="flex">
            <Link href="/">
              <a>
                <Image
                  src={traveloLogo}
                  alt="travelo logo"
                  height="48"
                  width="182"
                  placeholder="blur"
                />
              </a>
            </Link>
            <Search />
          </div>
          <div className="flex gap-5">
            <Nav />
            <Link href="/login">
              <a>
                <Button className="w-[190px]">masuk</Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
