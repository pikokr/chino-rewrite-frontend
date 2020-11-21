import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { withState } from '../../store';
import Util from '../../Util';

const Header = ({user}) => {
    const {t} = useTranslation()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    {t('common.header.title')}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/commands">
                        <FontAwesomeIcon icon={['fas', 'terminal']}/>
                        {t('common.header.links.commands')}</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {
                        user === false ? 
                        <Nav.Link onClick={() => {
                            window.open(`${Util.config.api}/urls/login`, 'Login', 'width=500;height=500')
                        }}>
                            <FontAwesomeIcon icon={['fas', 'lock']}/>
                            {t('common.header.login')}
                        </Nav.Link>
                        : ''
                    }
                </Nav>
            </Navbar>
        </>
    );
};

export default withState(Header);