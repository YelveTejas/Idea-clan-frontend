import { Box, Flex, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { GrAnnounce } from "react-icons/gr";
import { backendUrl } from '../../Pages/Home';
import { useEffect } from 'react';
import axios from 'axios';

const Lectures = () => {
  const [lecturedata,setLecturedata] = useState([])
 const toast = useToast()
  const AllLectures=async()=>{
    try{
      const {data} = await  axios.get(`${backendUrl}/admin/lectures`)
    //  console.log(data)
      setLecturedata(data)
    }catch(error){
     // console.log(error)
     toast({
      title: "Error While Fetching",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
     })
    }
  
  }
  useEffect(()=>{
    AllLectures()
  },[])
  return (
    <Box bgColor={'#E2E8F0'} p='20px' h='630px'>
    {
      lecturedata && lecturedata.map((e,i)=>(
        <Flex key={i+1} py='10px' justifyContent={'space-between'} alignItems={'center'}>
          <Flex gap='10px' w='350px' alignItems={'center'}> 
          <GrAnnounce/>
          <Text fontSize={'18px'} fontWeight={'md'}>{e.title}</Text>
          </Flex>
         
          <Text fontSize={'18px'}>{e.lecturer}</Text>
          <Text fontSize={'18px'}>{e.date}</Text>
        </Flex>
      ))
    }

    </Box>
  )
}

export default Lectures