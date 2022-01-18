import { Flex, useColorMode, Image, Button, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const { colorMode, toggleColorMode } = useColorMode();

    function handleLogoClick() {
        navigate.push("/");
    }

    return (
        <Flex
            as="header"
            fontSize="lg"
            fontWeight="semibold"
            w="100%"
            p={4}
            mt="0"
            flexDirection={["column", "row"]}
            justify="space-between"
        >
            <Link as={ReactLink} to="/" fontSize={["2xl", "3xl", "4xl"]}>
                Hool
            </Link>
            <Link as={ReactLink} to="/about">
                About Me
            </Link>
            <Link as={ReactLink} to="/portfolio">
                Portfolio
            </Link>
            <Link as={ReactLink} to="/contact">
                Contact Me
            </Link>
            <Button
                variant="primary"
                m="0.5"
                onClick={toggleColorMode}
                size="lg"
            >
                {colorMode === "light" ? "🌙" : "☀️"}
            </Button>
        </Flex>
    );
};

export default Header;