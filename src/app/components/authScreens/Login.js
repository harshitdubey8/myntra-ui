import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <LoginSection>
      <LoginCard>
        <LoginImg src=" https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" />
        <LoginMain>
          <Heading1>
            Login <Heading2>or</Heading2> SignUp
          </Heading1>

          <AuthInput placeholder="+91  |  Mobile Number" />
          <TextDiv>
            <Text1>
              By continuing , I agree to the <Text2>Term of Use </Text2> &{" "}
              <Text2>Privacy Policy </Text2>
            </Text1>
          </TextDiv>

          <SubmitButton>CONTINUE</SubmitButton>
          <TextDiv>
            <Text1>
              Having Trouble logging in? <Text2>Get Help</Text2>
            </Text1>
          </TextDiv>
        </LoginMain>
      </LoginCard>
    </LoginSection>
  );
}

export default Login;

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdeeed;
  height: calc(100vh- 80px);
`;

const LoginCard = styled.div`
  width: 400px;
  background-color: #fff;
  height: 590px;
  margin-top: 40px;
`;

const LoginMain = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 30px;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;
`;

const LoginImg = styled.img`
  width: 400px;
  height: 150px;
`;

const Heading1 = styled.h1`
  color: #3e4152;
  font-size: 20px;
  font-weight: 650;
  margin-bottom: 24px;
  /* font-size: 1.8em;
  margin: 30px 0px 10px 0px;
  max-height: 5em; */
`;

const Heading2 = styled.h1`
  color: #3e4152;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 24px;
  display: inline;
`;

const AuthInput = styled.input`
  width: 330px;
  height: 40px;
  font-size: 1.3rem;
  border: 1px solid #ccc;
  outline-width: 0;
  padding: 10px;
  margin: 10px 0px 5px 0px;

  ::-webkit-input-placeholder {
    color: #a8aab1;
  }
`;
const TextDiv = styled.div`
  display: flex;
  width: 330px;
  margin: 10px 0px 5px 0px;
`;

const Text1 = styled.h3`
  color: #a3a4ac;
  font-weight: 500;
  font-size: 14px;
`;
const Text2 = styled.h3`
  display: inline;
  color: #ff3f6c;
  font-weight: 500;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #ff3f6c;
  text-align: center;
  padding: 12px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 330px;
  border: none;
`;
