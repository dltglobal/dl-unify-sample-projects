import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../redux/slices/accountSlice";
import { resetPaymentSliceState } from "../../../redux/slices/paymentSlice";
import { resetlistSliceState } from "../../../redux/slices/listSlice";
import { resetDashboardSlice } from "../../../redux/slices/dashboardSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Section = styled.div`
  height: fit-content;
  width: 75vw;
  background-color: ${({ theme }) => theme.grayWeb};
  border-radius: 1.5rem;
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
`;

const Heading = styled.div`
  height: 4rem;
  width: inherit;
  background-color: ${({ theme }) => theme.skobeloff};
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

const HeadingText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Medium";
  font-size: 1.8rem;
  padding-left: 1.4rem;
  padding-top: 0.8rem;
  margin-top: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 1rem;
  margin-left: 3rem;
`;

const FieldText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Medium";
  font-size: 1.4rem;
  margin-bottom: 0;
`;

const ValueText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.2rem;
  margin-left: 1.2rem;
  margin-bottom: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SignOutButton = styled.div`
  height: 2.5rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.skobeloff};
  color: ${({ theme }) => theme.gunmetal};
  font-size: 1.2rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Medium";
  &:hover {
    background-color: ${({ theme }) => theme.grayWeb};
    cursor: pointer;
  }
`;

const Account = () => {
  const dispatch = useDispatch();

  const accountType = useSelector((state) => state.accountSlice.accountType);
  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);

  const signOutAction = () => {
    dispatch(signOut());
    dispatch(resetDashboardSlice());
    dispatch(resetlistSliceState());
    dispatch(resetPaymentSliceState());
  };

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Account Details</HeadingText>
        </Heading>
        <Content>
          <Row>
            <FieldText>Account Type:</FieldText>
            <ValueText>{accountType}</ValueText>
          </Row>
          <Row>
            <FieldText>Blockchain ID:</FieldText>
            <ValueText>{blockchainId}</ValueText>
          </Row>
          <ButtonRow>
            <Link to="/" style={{ textDecoration: "none" }}>
              <SignOutButton onClick={() => signOutAction()}>
                Sign Out
              </SignOutButton>
            </Link>
          </ButtonRow>
        </Content>
      </Section>
    </Container>
  );
};

export default Account;
