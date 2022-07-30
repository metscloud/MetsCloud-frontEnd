// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import routes from "routes.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import PmTables from "components/PmTables/PmTables";
import SvTables from "Comp/UserTable/SvTables";
import UserDevices from "Comp/Devices/UserDevices";
import { usercontext } from "Hooks/Authcontext/Authcontext";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  const {designation,LogOut} = useContext(usercontext)
  // Chakra Color Mode
  let inputBg = "#0F1535";
  let mainText = "gray.400";
  let navbarIcon = "white";
  let searchIcon = "white";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  let initialroute = [
    {
      path: "/dashboard",
      name: "Home",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: Dashboard,
      layout: "/admin",
    }
  ]
  if(designation=="businessOwner"){
    initialroute.push({
      path: "/projectmanagers",
      name: "Project Manager",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: PmTables,
      layout: "/admin",
    })
    initialroute.push({
      path: "/supervisors",
      name: "Supervisor",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: SvTables,
      layout: "/admin",
    })
  }else if(designation=="projectManager"){
    initialroute.push({
      path: "/supervisors",
      name: "Supervisor",
      rtlName: "لوحة القيادة",
      icon: <HomeIcon color='inherit' />,
      component: SvTables,
      layout: "/admin",
    })
  }
  let routes = [...initialroute,{
    path: "/devices",
    name: "Devices",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: UserDevices,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   rtlName: "لوحة القيادة",
  //   icon: <StatsIcon color='inherit' />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  {
    path: "/tables",
    name: "Add device",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Add sensor",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Generate token",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "لوحة القيادة",
    icon: <PersonIcon color='inherit' />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  }]
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems='center'
      flexDirection='row'>
      <InputGroup
        cursor='pointer'
        bg={inputBg}
        borderRadius='15px'
        borderColor='rgba(226, 232, 240, 0.3)'
        w={{
          sm: "128px",
          md: "200px",
        }}
        me={{ sm: "auto", md: "20px" }}>
        <InputLeftElement
          children={
            <IconButton
              bg='inherit'
              borderRadius='inherit'
              _hover='none'
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon color={searchIcon} w='15px' h='15px' />
              }></IconButton>
          }
        />
        <Input
          fontSize='xs'
          py='11px'
          color={mainText}
          placeholder='Type here...'
          borderRadius='inherit'
        />
      </InputGroup>
      <NavLink to='/auth/signin'>
        <Button
          ms='0px'
          px='0px'
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant='transparent-with-icon'
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w='22px' h='22px' me='0px' />
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} w='22px' h='22px' me='0px' />
            ) : (
              ""
            )
          }>
          {/* <Text display={{ sm: "none", md: "flex" }}>Sign In</Text> */}
        </Button>
      </NavLink>
      <SidebarResponsive
        iconColor='gray.500'
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      
      <SettingsIcon
        cursor='pointer'
        ms={{ base: "16px", xl: "0px" }}
        me='16px'
        ref={settingsRef}
        onClick={props.onOpen}
        color={navbarIcon}
        w='18px'
        h='18px'
      />
      <Menu>
        <MenuButton align='center'>
          <BellIcon color={navbarIcon} mt='-4px' w='18px' h='18px' />
        </MenuButton>

        <MenuList
          border='transparent'
          backdropFilter='blur(63px)'
          bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
          borderRadius='20px'>
          <Flex flexDirection='column'>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              mb='10px'>
              <ItemContent
                time='13 minutes ago'
                info='from Alicia'
                boldInfo='New Message'
                aName='Alicia'
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              _hover={{ bg: "transparent" }}
              mb='10px'>
              <ItemContent
                time='2 days ago'
                info='by Josh Henry'
                boldInfo='New Album'
                aName='Josh Henry'
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem
              borderRadius='8px'
              _hover={{
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}>
              <ItemContent
                time='3 days ago'
                info='Payment succesfully completed!'
                boldInfo=''
                aName='Kara'
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <SettingsIcon
        cursor='pointer'
        ms='16px'
        me='16px'
        ref={settingsRef}
        onClick={()=>LogOut()}
        color={"red"}
        w='18px'
        h='18px'
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
