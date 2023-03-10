import React from 'react'
import { Box } from '@chakra-ui/react'

type propsType = {
  children: any
}

const PlayerLayout = ({children}: propsType) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="250px" >
        Sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" >
        Player
      </Box>
    </Box>
  )
}

export default PlayerLayout