import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {t} = useTranslation()

    return (
        <>
            <Navbar>
                {t('common.title')}
            </Navbar>
        </>
    );
};

export default Header;