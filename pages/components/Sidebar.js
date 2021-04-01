import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator"
import { auth, db } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import Chat from "./Chat";

const Sidebar = () => {
    const [user] = useAuthState(auth)
    const userChatRef = db.collection("chats").where("users", "array-contains", user.email)
    const usersRef = db.collection("users")
    const [chatsSnapshot] = useCollection(userChatRef)
    const [usersSnapshot] = useCollection(usersRef)
    const createChat = () => {
        const input = prompt("Enter Email Address");
        if (!input) return;
        
        if(EmailValidator.validate(input) &&!chatAlreadyExists(input) && input!==user.email){
            //do somethingEmailValidator
            db.collection("chats").add({
                users: [user.email, input]
            })
        }
            
    }
    console.log("s", chatsSnapshot)

    const chatAlreadyExists = (recepientEmail) => !!chatsSnapshot?.docs.find(chat => chat.data().users.find(user => user == recepientEmail.length() > 0))
    

    return(
    <Container>
        <Header>
            <UserAvatar onClick={() => auth.signOut()} />
            <IconContainer>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </IconContainer>
        </Header> 
        <Search>
            <SearchIcon />
            <SearchInput placeholder="Search in Chat" />
        </Search>
        <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>

        {
            chatsSnapshot?.docs.map(chat => (
                <Chat key={chat.id} id={chat.id} users={chat?.data().users} />
            ))
        }


    </Container>
    );
};
export default Sidebar
const Container = styled.div``;
const Header = styled.div`
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;
    transition: all 0.3s ease;
    :hover{
        opacity: 0.8;
    }
`;
const IconContainer = styled.div``;
const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;
const SearchInput = styled.input`
    flex: 1;
    outline-width: 0;
    border: none;
    font-size: 1rem;
`;
const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`
