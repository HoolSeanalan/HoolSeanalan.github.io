import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import Project from './components/Project/index.js';
//import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Portfolio from './components/Portfolio/index.js';
import Contact from './components/Contact/index.js';

const App = () => {
    return (
        <Router>
            <Flex
                flexDirection="column"
                minH="100vh"
            >
                <Header />
                <Routes>
                    <Route exact path="/" element={
                        <Flex flexDirection={["column", "column", "row"]} p={["10px", "10px"]} justify={"space-between"}>
                            <About/>
                            <Project/>
                        </Flex>
                    } />
                    <Route path="/about" element={<About/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer/>
            </Flex>
        </Router>
    );
}

export default App;