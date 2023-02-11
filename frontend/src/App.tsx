import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Order from './pages/Order';
import Register from './pages/Register';
// import { Center, Spinner, Text, VStack } from '@chakra-ui/react';

// const App = (): JSX.Element => (
// 	<Center mt="160px">
// 		<VStack spacing="32px">
// 			<Text>It's time for you to start frontend development!</Text>
// 			<Spinner w="132px" h="132px" />
// 		</VStack>
// 	</Center>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
