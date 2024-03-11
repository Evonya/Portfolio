import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { AiFillLinkedin } from "react-icons/ai";
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Computer Science student based in France!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacques Remy
          </Heading>
          <p>21 yo passionate developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/jacques.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hey there! I'm Jacques, studying at EPITA in Lyon and I'm all about 
          creating cool digital stuff. Whether it's dreaming up new ideas, 
          designing them, or coding them into reality, I love the whole process. 
          When I'm not glued to a screen, you can find me hanging out with friends 
          or learning something new - honestly, anything goes!
        </Paragraph>
        <br />
        <Paragraph>
          Learning new tricks and diving into different technologies is kind of my jam. 
          I mean, there's always something new popping up, right? It keeps things exciting. 
          If you're curious about the projects I've worked on or just wanna talk, welcome to my portfolio's the place.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Lyon, France.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Baccalaureate at the Lycée Blaise Pascal in Charbonière-les-bains.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Did a 2 month internship in a company.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Studied 1 semester in Ireland at IT Sligo in Computer Science.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Participated to Finance & Innovation for Good Competition.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Theater, Photography, Volley Ball, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Evonya" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Evonya
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jacques-remy/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiFillLinkedin />}
              >
                @jacques.remy
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout> 
)

export default Home
export { getServerSideProps } from '../components/chakra'
