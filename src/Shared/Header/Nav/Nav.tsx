import React, { FC } from 'react';
import {
  Flex,
  Image,
  Spacer,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';
import Logo from '@assets/images/telow-logo.svg';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const route = useNavigate();

  const { user, setUser, setToken, authorizerRef } = useAuthorizer();

  const logout = () => {
    authorizerRef.logout();
    setUser(null);
    setToken(null);
    route('/');
  };

  return (
    <Flex as="nav" className="navigation" px={3} py={1} fontWeight={500}>
      <Link to="/">
        <Image maxWidth="120px" src={Logo} />
      </Link>
      <Spacer />
      {user ? (
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="user-menu"
            >
              <Box alignItems="center" display="flex">
                <Avatar
                  size="xs"
                  marginRight={3}
                  name={`${user.given_name} ${user.family_name}`}
                  src={user.picture ? user.picture : ''}
                />
                <Text fontSize="small">
                  {user.given_name} {user.family_name}
                </Text>
              </Box>
            </MenuButton>
            <MenuList>
              <Link to="/settings">
                <MenuItem fontWeight={600}>Settings</MenuItem>
              </Link>
              <MenuItem fontWeight={600} onClick={logout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Text>No User</Text>
      )}
    </Flex>
  );
};

export default Nav;
