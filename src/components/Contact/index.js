import { Flex, Link } from "@chakra-ui/react";

const Contact = () => {
    return (
        <Flex flexDirection={"column"}>
            <Flex
                justify={"center"}
                fontSize={["2xl", "3xl", "4xl"]}>Contact</Flex>
            <Flex>
                Email: <a href="mailto:seanalan.hool@gmail.com">seanalan.hool@gmail.com</a>
            </Flex>
            <Flex>
                Phone: <a href="tel:+1-415-747-7820">(415) 747-7820</a>
            </Flex>
            <Flex>
                LinkedIn: <Link to="https://www.linkedin.com/in/seanalanhool/">https://www.linkedin.com/in/seanalanhool/</Link>
            </Flex>
            <Flex>
                GitHub: <Link to="https://github.com/HoolSeanalan">HoolSeanalan</Link>
            </Flex>
        </Flex>
    );
};

export default Contact;