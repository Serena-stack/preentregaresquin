import { ChakraProvider, Flex } from '@chakra-ui/icons';
import ItemListContainer from './assets/components/ItemListContainer/ItemListCointainer';
import NavBar from './assets/components/NavBar/NavBar';




function App() {




return (
    <>
    <ChakraProvider>
    <Layout>
    <ItemListContainer greeting="Bienvenidos!"/>
    <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
        <Counter/>
    </Flex>
    </Layout>
    </ChakraProvider>
    </>
)
}

export default App