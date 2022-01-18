import { Flex, HStack, Image, Link } from "@chakra-ui/react";

const backupProject = {
    title: "Cache",
    description: "Cache is an app for finding and offering short-term local self-storage. Cache allows users to search for available garages, sheds, basements and attics in their vicinity. Neighbors with free space can offer to host storage to their community.",
    image: "../../../cache.png",
    link: "https://cache-project.herokuapp.com/",
    github: "https://github.com/sivanagar/garage-finder"
}


const Project = ( project ) => {
    if (!project.info) {
        return (
            <Flex
                className="project"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW={["100%", "50%", "33%", "25%"]}
                maxH={["100%", "50%"]}
            >
                <Flex className="project__title" fontSize={["2xl"]}>
                    <Flex>{backupProject.title}</Flex>
                </Flex>
                <Flex maxH={"50%"} className="project__image" justifyContent={"center"}>
                    <Image src={backupProject.image} alt="" />
                </Flex>
                <Flex className="project__description">
                    <Flex>{backupProject.description}</Flex>
                </Flex>
                <Flex className="project__link">
                    <Link href={backupProject.link}>Deployed Application</Link>
                </Flex>
                <Flex className="project__github">
                    <Link href={backupProject.github}>GitHub</Link>
                </Flex>
            </Flex>
        );
    }
    else {
        return (
            <HStack
                className="project"
                flexDirection="column"
                maxW={["100%", "50%", "33%", "25%"]}
                maxH={["100%", "50%"]}
                paddingBottom={["2rem", "2rem", "2rem", "2rem"]}
            >
                <Flex className="project__title" fontSize={["2xl"]}>
                    <Flex>{project.info.title}</Flex>
                </Flex>
                <Flex maxH={"50%"} className="project__image" justifyContent={"center"}>
                    <Image src={project.info.image} alt="" />
                </Flex>
                <Flex className="project__description">
                    <Flex>{project.info.description}</Flex>
                </Flex>
                <Flex className="project__link">
                    <Link href={project.info.link}>Deployed Application</Link>
                </Flex>
                <Flex className="project__github">
                    <Link href={project.info.github}>GitHub</Link>
                </Flex>
            </HStack>
        );
    }
}

export default Project;