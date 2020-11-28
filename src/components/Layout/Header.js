import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {withState} from '../../store';
import Util from '../../Util';
import styled from "styled-components";

const DropdownMenuDiv = styled.div`
div {
    cursor: pointer;
}
`

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
                            <li className="nav-item">
                                <Link to="/status" className="nav-link">
                                    <FontAwesomeIcon icon={['fas', 'check']} style={{marginRight: 10}}/>
                                    {t('common.header.links.status')}
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                user === false ?
                                    <li className="nav-item">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="nav-link" href="#" onClick={() => {
                                            window.open(`${Util.config.api}/urls/login`, 'Login', 'width=400,height=700')
                                        }}>
                                            <FontAwesomeIcon style={{marginRight: 10}} icon={['fas', 'lock']}/>
                                            {t('common.header.login')}
                                        </a>
                                    </li>
                                    : user === null ? (
                                        <div className="spinner-border text-white"/>
                                    ) : (
                                        <ul className="dropdown nav-item">
                                            <div className="nav-link dropdown-toggle" data-toggle="dropdown" style={{
                                                cursor: 'pointer'
                                            }}>
                                                {user.meta.username}#{user.meta.discriminator}
                                            </div>
                                            <DropdownMenuDiv className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="/servers">
                                                    {t('common.header.guilds')}
                                                </Link>
                                                <div className="dropdown-item" onClick={() => {
                                                    localStorage.removeItem('token')
                                                    window.location.reload()
                                                }}>
                                                    {t('common.header.logout')}
                                                </div>
                                            </DropdownMenuDiv>
                                        </ul>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{
                height: 70
            }}/>
        </>
    );
};

export default withState(Header);