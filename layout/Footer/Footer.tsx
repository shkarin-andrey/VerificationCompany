import React, { FC } from "react";
import { Footer as MainFooter } from "flowbite-react";
import Logo from "../../components/Logo";

const Footer: FC = () => {
  return (
    <div className="w-full rounded-t-lg bg-[#f1f1f1] dark:bg-gray-800 md:flex md:items-center md:justify-between">
      <div className="container mx-auto px-2 py-2.5 sm:px-4">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <Logo />
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <MainFooter.Title title="about" />
              <MainFooter.LinkGroup col={true}>
                <MainFooter.Link href="#">Flowbite</MainFooter.Link>
                <MainFooter.Link href="#">Tailwind CSS</MainFooter.Link>
              </MainFooter.LinkGroup>
            </div>
            <div>
              <MainFooter.Title title="Follow us" />
              <MainFooter.LinkGroup col={true}>
                <MainFooter.Link href="#">Github</MainFooter.Link>
                <MainFooter.Link href="#">Discord</MainFooter.Link>
              </MainFooter.LinkGroup>
            </div>
            <div>
              <MainFooter.Title title="Legal" />
              <MainFooter.LinkGroup col={true}>
                <MainFooter.Link href="#">Privacy Policy</MainFooter.Link>
                <MainFooter.Link href="#">Terms & Conditions</MainFooter.Link>
              </MainFooter.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
