import { Stack, Box, SlideFade, Text, Heading, Link, Button } from '@chakra-ui/react'
import { FaCarBattery, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
  return (
    <Stack spacing={10} justifyContent="flex-start" alignItems="center">
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}>

        <Box position="relative">
          <Text
            color="displayColor"
            fontSize="display2"
            fontWeight="medium"
            position="relative"
          >
            Hey there, I'm-
          </Text>
        </Box>
        <Heading
          fontSize="display"
          lineHeight={'95%'}
          color="#ffff00"
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
          position="relative"
        >
          <Box color="#00BBFF" as="span">GTA 18.7 ICLe</Box>
          .
        </Heading>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      >
        <Box w={['85vw', '40vw']}>
          <Text fontSize="display3" color="textSecondary">
            Blah and foo!
          </Text>
        </Box>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
      >
        <Stack isInline spacing={4}> {/*This is a stack of buttons*/}
          <Link href="https://github.com/GTArvanitakis" isExternal>
            <Button
              leftIcon={<FaGithub color="#00ff00" />}
              position="static"
              size='md'
              color="white"
              bg="#005055"
            >
              Github
            </Button>
          </Link>
          <Link href="https://linkedin.com/" isExternal>
            <Button
              leftIcon={<FaLinkedin color="#FF0000" />}
              position="static"
              size='md'
              color="white"
              bg="#550000"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:gtarvanitakis@yahoo.gr" isExternal>
            <Button
              leftIcon={<FaEnvelope fill="#5F99FF" />}
              transition="0.3s"
              position="static"
              size='md'
              color="white"
              bg="#000040"
            >
              Email
            </Button>
            <Button
              leftIcon={<FaCarBattery fill="#ff00ff"/>}
              transition="0.3s"
              position="static"
              size='md'
              color="white"
              bg="#000040"
            >
              New Button
            </Button>
          </Link>
        </Stack>
      </SlideFade>
    </Stack>
  )
}