import { Flex } from "@chakra-ui/react";
import Project from "../Project";

const cacheInfo = {
    title: 'Cache',
    description: "Cache is an app for finding and offering short-term local self-storage. Cache allows users to search for available garages, sheds, basements and attics in their vicinity. Neighbors with free space can offer to host storage to their community.",
    image: "../../../cache.png",
    link: "https://cache-project.herokuapp.com/",
    github: "https://github.com/sivanagar/garage-finder"
}

const Portfolio = () => {
    return (
        <Flex flexDirection={"column"}>
            <Flex
                justify={"center"}
                fontSize={["2xl", "3xl", "4xl"]}
            >
                Portfolio
            </Flex>
            <Flex
                flexDirection={["column", "row"]}
            >
                <Flex>
                    <Project info={cacheInfo} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Portfolio;