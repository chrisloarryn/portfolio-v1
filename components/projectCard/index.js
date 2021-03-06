import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/layout';
import { useColorModeSwitcher } from '../../utils/hooks/useColorModeSwitcher';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';

export const ProjectCard = ({ project, ...props }) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();
  return (
    <Box
      as="li"
      mb={{ base: '2rem', '2xl': 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      borderColor={colorGrey}
      w={{ base: '90%', md: '30rem' }}
      {...props}
    >
      <Center
        borderRadius={0}
        fill={colorLight}
        mb="3rem"
        w="100%"
        h="8rem"
        bg={colorDark}
      >
        {project.logo}
      </Center>
      <VStack px="2rem" align="start" spacing="2rem">
        <Heading as="h3" variant="h3">
          {project.title}
        </Heading>
        <Text>{project.description}</Text>
        <List display="flex" flexDirection="row">
          {project.tools.map((tool) => (
            <ListItem key={tool.id} p="0.5rem">
              <Icon
                transitionDuration="300ms"
                boxSize="1.5rem"
                as={tool.icon}
                _hover={{ fill: tool.color }}
              />
            </ListItem>
          ))}
        </List>
        <HStack pb="2rem">
          {project.live && (
            <Button as="a" href={project.live} variant="secondary">
              Visit Site
            </Button>
          )}
          <Button as="a" href={project.repo} variant="secondary">
            View Code
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
