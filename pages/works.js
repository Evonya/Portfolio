import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPartyBlowout from '../public/images/works/PartyBlowout.png'
import thumbOCRSudoku from '../public/images/works/OCRSudoku.png'
import thumbAfit from '../public/images/works/Afit.png'
import thumbPortfolio from '../public/images/works/Portfolio.png'
import thumbSwipeArena from '../public/images/works/SwipeArena.png'
import thumbDressUp from '../public/images/works/DressUp.png'
import thumb42sh from '../public/images/works/42sh_01.png'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="PartyBlowout" title="PartyBlowout" thumbnail={thumbPartyBlowout}>
            A 3D multiplayer game made with Unity.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="OCRSudoku" title="OCRSudoku" thumbnail={thumbOCRSudoku}>
            Optical Character Recognition (OCR) software that solves a sudoku grid.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Afit" title="Arithmetic for IT" thumbnail={thumbAfit}>
            The AFIT (Standing for Arithmetic for IT) project has for aim to build first standard ciphering algorithms
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Portfolio" title="Portfolio" thumbnail={thumbPortfolio}>
            My personal portfolio.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="42sh" title="42sh" thumbnail={thumb42sh}>
            A UNIX shell program compliant with the POSIX standard.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <Section delay={1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Works in progress
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={1.5}>
          <WorkGridItem id="SwipeArena" title="SwipeArena" thumbnail={thumbSwipeArena}>
            A 2D multiplayer game made with Unity.
          </WorkGridItem>
        </Section>
        <Section delay={1.5}>
          <WorkGridItem id="DressUp" title="DressUp" thumbnail={thumbDressUp}>
            An android and IOS application made with React Native.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
