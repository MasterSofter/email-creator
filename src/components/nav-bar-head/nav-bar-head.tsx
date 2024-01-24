import React from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";

export default function NavBarHead(props: { is_builtLetter: boolean }): React.JSX.Element {
  return (
    <Navbar bg="primary" style={{margin: 0}}>
      <div className="d-flex align-items-center justify-content-between py-1 px-5 w-100">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={(props.is_builtLetter ? "https://dev.mai.ru/services/email-creator-tr/images/dev-logo.svg" : process.env.PUBLIC_URL + "/images/dev-logo.svg")}
            height="34"
          />
        </NavbarBrand>
      </div>
    </Navbar>
  );
}