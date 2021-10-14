import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlockchainId, signIn } from "../redux/slices/accountSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tenant from "../assets/images/Tenant.svg";
import Landlord from "../assets/images/Landlord.svg";
import LettingAgency from "../assets/images/LettingAgency.svg";

const OnboardingContainer = styled.div`
  background-color: ${({ theme }) => theme.viridianGreen};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-size: 4rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Bold";
`;

const WelcomeText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-size: 1.4rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Medium";
`;

const AcountIdInput = styled.input`
  height: 2rem;
  width: 21rem;
  background-color: ${({ theme }) => theme.mintCream};
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Light";
  font-size: 1.2rem;
  text-align: center;
  border-radius: 0.5rem;
  border: 0;
`;

const SignInButton = styled.div`
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

const InfoText = styled.p`
  margin-top: 21.5vh;
  color: ${({ theme }) => theme.gunmetal};
  font-size: 1rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Medium";
`;

const Panel = styled.div`
  background-color: ${({ theme }) => theme.skobeloff};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 35vw;
  right: 0;
  width: 65vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PanelImage = styled.img`
  height: 90vh;
  width: 90vw;
`;

const Authentication = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const accountType = useSelector((state) => state.accountSlice.accountType);

  const signInAction = () => {
    dispatch(setBlockchainId(id));
    dispatch(signIn());
  };

  return (
    <div>
      <OnboardingContainer>
        <Title>
          Welcome to
          <br />
          LettingClub
        </Title>
        <WelcomeText>Please enter your Blockchain ID (Public Key):</WelcomeText>
        <AcountIdInput
          placeholder="Account ID"
          onChange={(id) => setId(id.target.value)}
        ></AcountIdInput>
        <br />
        <Link to="/Dashboard" style={{ textDecoration: "none" }}>
          <SignInButton onClick={() => signInAction()}>Sign In</SignInButton>
        </Link>
        <InfoText>
          Decentralised letting platform that <br /> operates on the Ethereum
          Blockchain.
        </InfoText>
      </OnboardingContainer>
      <Panel>
        <PanelImage
          src={
            accountType === "Tenant"
              ? Tenant
              : accountType === "Landlord"
              ? Landlord
              : accountType === "LettingAgency"
              ? LettingAgency
              : null
          }
        />
      </Panel>
    </div>
  );
};

export default Authentication;
