import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const {t} = useTranslation()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    {t('common.title')}
                </Navbar.Brand>
            </Navbar>
        </>
    );
};

export default Header;