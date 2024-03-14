import { Avatar, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Profile from "../component/Sidebar/Profile";
import Settings from "../component/Sidebar/Settings";
import Lectures from "../component/Sidebar/Lectures";
import { UserState } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [currentContent, setCurrentContent] = useState("Lecture");
  const {user,setUser} = UserState()
  const navigate =useNavigate()
  const [check,setCheck] = useState(false)
//console.log(user,'user')
const {username} = JSON.parse(localStorage.getItem("userInfo"))
  const changeContent = (name) => {
    switch (name) {
      case 'Profile':
        setCurrentContent(Profile);
        break;
      case 'Settings':
        setCurrentContent(<Settings />);
        break;
      case 'Lecture':
        setCurrentContent(<Lectures/>);
        break;  
      default:
        setCurrentContent(null); // Default content or handle other cases
        break;
    }
  };


  const handlelogout = () =>{
    localStorage.removeItem("userInfo");
    setUser();
    navigate("/");
  }
  return (
    <Box >
        <Flex px='20px' alignItems={'center'} gap='20px' justifyContent={'space-between'}>
           
            <Flex py='20px' alignItems={'center'} gap='10px'>
               <Avatar size='sm' />
               <Text textTransform={'uppercase'}>{username}</Text>
            </Flex>
            <Input w='8cm' placeholder="search"/>
           
             <Button onClick={()=>handlelogout()}>
                Logout
             </Button>
        </Flex>
      <Flex  h='630px'>
        <Flex  flexDir={'column'} gap='15px' width="250px" bgColor={'#171923'} padding="20px"  color='white' boxSizing="border-box">
          <Text cursor="pointer"  borderBottom={'1px solid black'} fontStyle={'md'} fontSize={'20px'} onClick={() => changeContent('Lecture')}>
            Lectures
          </Text>
          <Text cursor="pointer"   borderBottom={'1px solid black'} fontSize={'20px'} onClick={() => changeContent('Profile')}>
            Profile
          </Text>
          <Text cursor="pointer"   borderBottom={'1px solid black'} fontSize={'20px'} onClick={() => changeContent('Settings')}>
            Settings
          </Text>
        </Flex>
        <Box flex="1"  boxSizing="border-box" >
          {currentContent}
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
