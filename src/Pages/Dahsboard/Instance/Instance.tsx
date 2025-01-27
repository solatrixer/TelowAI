import { FC } from 'react';
import './Instance.scss';
import { PiBrainLight, PiGear } from 'react-icons/pi';
import { RiHistoryFill } from 'react-icons/ri';

import { Outlet } from 'react-router-dom';
import { As, Box, Grid, GridItem, Spinner } from '@chakra-ui/react';
import MenuSidebar from '../../../Shared/SideMenu/SideMenu';
import useActiveInstanceStore from '../../../States/instancesStore';
import ChatHistory from './Chat/ChatHistory/ChatHistory';

interface InstanceProps {}

interface MenuItem {
  name: string;
  icon: As;
  route: string;
  handler: () => void;
  external?: boolean;
  popoverComponent?: JSX.Element;
}

const Instance: FC<InstanceProps> = () => {
  const activeInstance = useActiveInstanceStore((state) => state.instance);
  const menu: MenuItem[] = [
    {
      name: 'Chat',
      icon: PiBrainLight,
      route: `chat`,
      handler: () => {},
      external: true,
    },
    {
      name: 'Settings',
      icon: PiGear,
      route: 'settings',
      handler: () => {},
      external: true,
    },
    {
      name: 'History',
      icon: RiHistoryFill,
      route: '',
      handler: () => {},
      popoverComponent: <ChatHistory instance={activeInstance} />,
      external: true,
    },
  ];

  return (
    <Box borderRight="1px solid #292929" height="100%">
      <Grid
        templateColumns="repeat(24, 1fr)"
        templateRows="0fr"
        background="#131313"
        height="100%"
      >
        <GridItem
          colSpan={24}
          p={3}
          backgroundColor="#0d1116"
          color="white"
          fontSize={13}
          fontWeight={600}
          height={45}
          borderBottom="1px solid #373737"
        >
          {activeInstance?.domain}
        </GridItem>
        {activeInstance ? (
          <GridItem className="InstanceContainer" colSpan={{ base: 24 }}>
            <Box
              position="absolute"
              zIndex={10}
              as="aside"
              background="#262626"
              mt={3}
              borderRadius="7px"
              boxShadow="md"
              py={3}
              height="fit-content"
              px={{ base: 5, md: 4 }}
              ml={3}
            >
              <Box className="InstanceMenu">
                <MenuSidebar
                  menuItems={menu}
                  divider={false}
                  iconColor="#fff"
                />
              </Box>
            </Box>
            <Outlet />
          </GridItem>
        ) : (
          <Spinner />
        )}
      </Grid>
    </Box>
  );
};

export default Instance;
