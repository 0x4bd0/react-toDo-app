import { Container } from "@material-ui/core";
import Header from "./header";
import List from "./list";

const Wrapper = () => {
    return ( 
        <Container className="wrapper"fixed>
        <Header></Header>
        <List></List>
        </Container>
     );
}
 
export default Wrapper;