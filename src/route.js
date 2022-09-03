import React from 'react';
import {
    Grid, 
    GridItem,
    Container ,
    Stack,
    StackDirection,
    Wrap,
    WrapItem,
    Center,
    SimpleGrid,
    Box,
    Image,
    Text,
    Spinner,
   Spacer  
  } from '@chakra-ui/react'
 
  import {Link } from "react-router-dom";

class Myroute extends React.Component {
    constructor(props) {
        super(props);
     }
   render() {
      return (
        <Container maxW='container.xl' >

    <Link to="/">Back to Home</Link>
   

<Stack direction='row' spacing={4}>
  <Spinner size='xs' />
  <Spinner size='sm' />
  <Spinner size='md' />
  <Spinner size='lg' />
  <Spinner size='xl' />
</Stack>
  
  
  
                                                    
  
  
  
  <SimpleGrid minChildWidth='120px' spacing='40px'>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
  
  
  
  </Container>
      )
   }
}
export default Myroute;