import { Flex, Image } from "@chakra-ui/react";

const About = () => {
    return (
        <Flex flexDirection="column">
        <Flex
            justify={"center"}
            fontSize={["2xl", "3xl", "4xl"]}
        >
            About Me
        </Flex>
            <Flex
                flexDirection={["column", "row"]}
                p={4}
            >
                <Image maxHeight='50vh' objectFit={"scale-down"} src="../../../hoolseanalan.jpg" alt="Seanalan Hool" />
                <Flex maxW={["100%", "50%"]} flexDirection={"column"}>
                    <Flex>
                        I'm a web developer with a passion for learning new technologies
                        I can use to improve the things I make. I currently spending my time
                        improving my skills in web development and working on a few passion
                        projects.
                    </Flex>
                    <Flex>
                        I recently graduated the UC Berkeley Extension Coding Bootcamp, a
                        24-week, intensive, web development bootcamp.
                    </Flex>
                    <Flex>
                        Currently I'm looking for a full-time web development position in the Bay Area.
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default About;