import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const {t} = useTranslation()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    {t('common.header.title')}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/commands">{
                        t('common.header.links.commands')
                    }</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;