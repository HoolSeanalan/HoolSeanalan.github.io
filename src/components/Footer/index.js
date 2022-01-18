import { Box, Container, useColorMode } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
            as="footer"
            bg={colorMode === "light" ? "primaryLight" : "primaryDark"}
            fontSize="lg"
            fontWeight="semibold"
            w="100%"
            p={4}
            mt="0px"
            pos={"fixed"}
            bottom="0"
        >
            <Container centerContent>
                &copy; {new Date().getFullYear()} Seanalan Hool
            </Container>
        </Box>
    );
};

export default Footer;