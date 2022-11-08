import { Stack, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import AboutMe from "../components/about-me"
import Container from "../components/container"
import GdscCanvas from "../components/gdsc-canvas"
import Intro from "../components/intro"
import Projects from "../components/projects"
const Home: NextPage = () => {
  return (
    <> 

    {/* Type script: react handles componentes */}
      <Container>           
        <Stack
        spacing={20}
        alignItems = "center"
        // Refer to the recording
        // justifyContent="left"
        mt = {{base: "5vw", md: "7.5vw"}}      
      >
        <Wrap>
          <WrapItem><Intro/></WrapItem>
          <WrapItem><GdscCanvas/></WrapItem>

        </Wrap>
        
        {/* Components are added as psrt of a larger containers */}
        <AboutMe/>

        <Projects/>
      
        </Stack>
        {/* <GdscCanvas/>  */}
      
      </Container>
      </>
  )
}

export default Home