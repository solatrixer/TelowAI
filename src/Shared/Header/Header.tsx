import React, { FC } from 'react';
import './Header.scss';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Nav from './Nav/Nav';
import VerifyAccountNotice from './VerifyAccountNotice/VerifyAccountNotice';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  document.title = title;

  const { user } = useAuthorizer();
  return (
    <>
      <Nav />
      {user?.email_verified ? null : <VerifyAccountNotice />}
    </>
  );
};

export default Header;
