import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import AirbnbCard from './adds_on/card'
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
 
 Spacer  
} from '@chakra-ui/react'
import {Link } from "react-router-dom";
function App() {
  return (

  
    <Container maxW='container.xl' >
   <Link to="/list">View Other</Link>
    <Box p={4} display={{ md: 'flex' }}>
    <Box flexShrink={0}>
      <Image
        borderRadius='lg'
        width={{ md: 40 }}
        src='https://bit.ly/2jYM25F'
        alt='Woman paying for a purchase'
      />
    </Box>
    <Box mt={{ base: 3, md: 0 }} ml={{ md: 6 }}>
      <Text
        fontWeight='bold'
        textTransform='uppercase'
        fontSize='sm'
        letterSpacing='wide'
        color='teal.600'
      >
        Marketing
      </Text>
    {/*   <Link
        mt={1}
        display='block'
        fontSize='lg'
        lineHeight='normal'
        fontWeight='semibold'
        href='#'
      >
        Finding customers for your new business
      </Link> */}
      <Text mt={1} color='gray.500'>
        Getting a new business off the ground is a lot of hard work. Here are five
        ideas you can use to find your first customers.
      </Text>
    </Box>
  </Box>
     
  
  
  
  <SimpleGrid columns={[2, null, 4]} spacing='20px'>
    <Box  >
      <AirbnbCard name="awtsuu"/>
    </Box>
   
  
    <Box  >
      <AirbnbCard name="Dennis Falcasantos"/>
    </Box>
  
    <Box  >
      <AirbnbCard name="Soprra"/>
    </Box>
  
  </SimpleGrid>                                                       
  
  
  
  <SimpleGrid minChildWidth='120px' spacing='40px'>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
  
  
  
  </Container>
  
  
  );
}

export default App;
