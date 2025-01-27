import React, { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { BiUserCircle } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';
import Header from '../../Shared/Header/Header';
import Profile from './Profile/Profile';
import Advanced from './Advanced/Advanced';
import MenuSidebar from '../../Shared/SideMenu/SideMenu';
import Billing from './Billing/Billing';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const location = useLocation();
  const menu = [
    {
      name: 'Profile',
      icon: BiUserCircle,
      route: `profile`,
      handler: () => {},
      external: true,
    },
    {
      name: 'Billing',
      icon: BsCreditCard2Front,
      route: 'billing',
      handler: () => {},
      external: true,
    },
  ];

  return (
    <Box background="#fff">
      <Header title="Settings | Telow" />
      <Grid templateColumns="repeat(18, 1fr)">
        <GridItem
          colSpan={{ base: 18, md: 1 }}
          as="aside"
          bg="#fff"
          borderRight="1px solid #e8e8e8"
          borderWidth={{ base: 1 }}
          borderColor="#e8e8e8"
          p="15px"
        >
          <MenuSidebar menuItems={menu} divider={false} />
        </GridItem>
        <GridItem colSpan={{ base: 18, md: 17 }} as="main">
          <Box width="100%" px="25px" py={5}>
            <Heading size="md">
              {location.pathname === `/settings` && <Text>Profile</Text>}
              {menu.map((i) => {
                if (location.pathname === `/settings/${i.route}`) {
                  return <Text key={i.name}>{i.name}</Text>;
                }
                return <Box key={i.route} />;
              })}
            </Heading>
          </Box>
          <Routes>
            <Route path="*" element={<Profile />} />
            <Route index path="/profile" element={<Profile />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/advanced" element={<Advanced />} />
          </Routes>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Settings;
