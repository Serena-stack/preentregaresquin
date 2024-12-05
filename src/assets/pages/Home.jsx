import { Flex } from "@chakra-ui/react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import loader from "../components/loader/loader";
import { useGetAllProducts } from "../hooks/useGetAllProducts";



const Home = () => {
    
    const {loading, products} = useGetAllProducts();


    // setTimeout(() => {
    //     setLoading(false)
    // }, 2000)


    return loading ? (
        <Loader />
    ) : (
        <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
            <ItemListContainer pro={products} />
        </Flex>
    );

}
export default Home;