import { FC } from "react";
import Navigation from "../../components/Navigation";

const Header: FC = () => {
  return (
    <header className="shadow">
      <div className="container mx-auto">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
