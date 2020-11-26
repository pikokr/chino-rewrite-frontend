import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {withState} from '../../store';
import Util from '../../Util';

const Header = ({user}) => {
    const {t} = useTranslation()

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {t('common.header.title')}
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar__collapse">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="navbar-collapse collapse" id="navbar__collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/commands" className="nav-link">
                                    <FontAwesomeIcon icon={['fas', 'terminal']} style={{marginRight: 10}}/>
                                    {t('common.header.links.commands')}
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                user === false ?
                                    <li className="nav-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="nav-link" href="#" onClick={() => {
                                            window.open(`${Util.config.api}/urls/login`, 'Login', 'width=500;height=500')
                                        }}>
                                            <FontAwesomeIcon style={{marginRight: 10}} icon={['fas', 'lock']}/>
                                            {t('common.header.login')}
                                        </a>
                                    </li>
                                    : ''
                            }
                        </ul>
                    </div>
                    {/*
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/commands">
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
                </Navbar.Collapse>
                */}
                </div>
            </nav>
            <div style={{
                height: 70
            }}/>
        </>
    );
};

export default withState(Header);