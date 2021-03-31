import Head from 'next/head';
import styled from "styled-components";
import Image from "next/image";
import { auth, provider } from "../../firebase"

const Login = () => {

    const signIn = () => {
    }

    return (
    <Container>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
          {/* <BackgroundImage>
            <BgImg src="/assets/bigGoogle.png" alt="GoogleBg" />
          </BackgroundImage> */}
          <LoginInWithGoogleBtn onClick={signIn}>
              <InnerGoogleIcon src="/assets/google.png" alt="googleIcon" />
              <BtnText>Login With Google</BtnText>
          </LoginInWithGoogleBtn>
      </PageContainer>
      </Container>
    );
}
 
export default Login;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    border: 2px solid red;
`;
const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url("/assets/bigGoogle.png");
    background-repeat: no-repeat;
    background-position: right top;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba(133, 203, 248, 0.2);
    border: 2px solid red;

`;

const LoginInWithGoogleBtn = styled.div`
    cursor: pointer;
    width: 15rem;
    height: 3.5rem;
    border: 5px solid #3EA6FF;   
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: relative;
    left: 5%;
    bottom: 0;
    top: 80%;
`
const InnerGoogleIcon = styled.img`
    width: 2.25rem;
    height: 2.25rem;
`
const BtnText = styled.p`
font-size: 1.2rem;
margin-left: 0.5rem;
font-family: Arial, Helvetica, sans-serif;
`