import { ChakraProvider } from '@chakra-ui/icons'
import { React } from 'react'
import layout from './assets/layout/layout'
import Home from './assets/pages/Home'




function App() {
return (
    <>
    <ChakraProvider>
    <Layout>
    <Home/>
    </Layout>
    </ChakraProvider>
    </>
)
}

export default App