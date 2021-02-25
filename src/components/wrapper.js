import { Container } from "@material-ui/core";
import Header from "./header";
import InputComponent from "./input";
import List from "./list";

const Wrapper = () => {
    return ( 
        <Container className="wrapper"fixed>
        <InputComponent></InputComponent>

        <div className="space"></div>
        <List></List>
        </Container>
     );
}
 
export default Wrapper;