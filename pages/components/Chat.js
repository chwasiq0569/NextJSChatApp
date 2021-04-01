import styled from "styled-components"
import { Avatar, IconButton, Button } from "@material-ui/core";
import getRecepientsEmail from './../api/utils/getRecepientsEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase"
const Chat = ({id, users}) => {
    const [user] = useAuthState(auth)
    const recepientEmail = getRecepientsEmail(users, user)

    return ( <Container> 
            <UserAvatar />
            <UserName>{recepientEmail}</UserName>
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

const UserName = styled.p`
    font-family: Arial, Helvetica, sans-serif;
`;