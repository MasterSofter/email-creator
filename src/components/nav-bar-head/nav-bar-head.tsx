import React from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";

export default function NavBarHead(props : {is_builtLetter : boolean}) : React.JSX.Element {
    return (
        <Navbar bg="secondary" style={{margin : 0}}>
            <div className="d-flex align-items-center justify-content-between px-sm-5 w-100">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src={ (props.is_builtLetter ? "https://dev.mai.ru/services/email-creator-tr/images/dev-logo.svg" : process.env.PUBLIC_URL + "/images/dev-logo.svg") }
                        height="36"
                    />
                </NavbarBrand>
            </div>
        </Navbar>
    )
}