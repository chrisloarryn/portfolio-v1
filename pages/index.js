import {
  Heading,
  Flex,
  Text,
  VStack,
  Box,
  useMediaQuery,
  Button,
  Link,
  List
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Container from '@/layouts/container'
import { HeroVisual } from '@/components/svg/heroVisual'
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher'
import Subscribe from '@/components/subscribe'
import projects from '@/data/projects'
import { ProjectCard } from '@/components/projectCard'

export default function Homepage() {
  return (
    <Container>
      <ContentWrapper>
        <Hero />
        <FeaturedProjects />
        <Subscribe />
      </ContentWrapper>
    </Container>
  )
}

const Hero = () => {
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)')
  return (
    <Flex justify="space-between" w={{ base: '90%', sm: '100%' }}>
      <Box
        // m={!isXtraLarge && 'auto'}
        w={{ base: '100%', xl: '50%' }}
      >
        <Heading mb="0.5rem" as="h1" variant="h1">
          Hi, I’m Cristobal Contreras.
        </Heading>
        <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
          Welcome to my corner of the internet, where you can find my works,
          thoughts, favourite coffee and other random things.
        </Text>
        <Heading as="h3" variant="h3" mb="0.5rem">
          Ok, but who are you?
        </Heading>
        <Text fontSize="xl" mb="2rem">
          I’m a curiosity-driven, design-focused developer, building rich,
          user-centric, inclusive experiences on the web.
        </Text>
        <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
          Feel free to have a look around, and learn more about myself and what
          I like to work on.{' '}
        </Text>
        <Button
          as="a"
          href="mailto:chrisloarryn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="primaryThemed"
          size="lg"
        >
          Get in touch
        </Button>
      </Box>
      {isXtraLarge && <HeroVisual />}
    </Flex>
  )
}

const FeaturedProjects = () => {
  return (
    <VStack spacing="4rem" w="100%" m="auto">
      <FeatureHeading>Featured Projects</FeatureHeading>
      <Flex
        w="100%"
        mb="2.5rem"
        direction={{ base: 'column', xl: 'row' }}
        justify="space-evenly"
      >
        <Projects />
      </Flex>
      <NextLink href="/projects" passHref>
        <Button
          as="a"
          textTransform="capitalize"
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: 'xl' }}
          variant="secondaryThemed"
        >
          See all projects
        </Button>
      </NextLink>
    </VStack>
  )
}

const Projects = () => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', '2xl': 'flex' }}
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </List>
  )
}

const FeaturedArticles = () => {
  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <FeatureHeading>Featured Articles</FeatureHeading>
      <ArticleCard />
      <ArticleCard />
      <NextLink href="/blog" passHref>
        <Link
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: '2xl' }}
        >
          Read all articles
        </Link>
      </NextLink>
    </VStack>
  )
}

export const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher()
  return (
    <Box
      mx="auto"
      p="2rem"
      border="2px solid"
      borderColor={colorGrey}
      w={{ base: '21em', lg: '57.5rem' }}
    >
      <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
        A heading for my amazing blog post
      </Heading>
      <Text variant="body" mb="2rem">
        This is some arbitrary subtitle for my amazing blog post that you should
        most definitely read!
      </Text>
      <Flex>
        <Text>Read more</Text>
        <Text>
          <span>→</span>
        </Text>
      </Flex>
    </Box>
  )
}

const ContentWrapper = ({ children }) => {
  return <VStack spacing={{ base: '10rem', lg: '15rem' }}>{children}</VStack>
}

const FeatureHeading = ({ children }) => {
  return (
    <Heading textAlign="center" as="h2" variant="h2">
      {children}
    </Heading>
  )
}
