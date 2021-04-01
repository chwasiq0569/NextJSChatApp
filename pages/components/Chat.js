import styled from "styled-components"
import { Avatar, IconButton, Button } from "@material-ui/core";

const Chat = () => {
    return ( <Container> 
            <UserAvatar />
            <p>Recepient Email</p>
        </Container>);
}
 
export default Chat;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    transition: all 0.2s ease;
    :hover{
        background-color: #e9eaeb;
    }
`
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    margin: 5px;
    margin-right: 15px;
`;