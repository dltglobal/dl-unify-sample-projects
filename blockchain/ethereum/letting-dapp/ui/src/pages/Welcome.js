import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccountType } from "../redux/slices/accountSlice.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Homes from "../assets/images/Homes.svg";

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

const AccountButton = styled.div`
  height: 2.7rem;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.skobeloff};
  color: ${({ theme }) => theme.mintCream};
  font-size: 1.2rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Regular";
  &:hover {
    background-color: ${({ theme }) => theme.grayWeb};
    cursor: pointer;
  }
`;

const InfoText = styled.p`
  margin-top: 12vh;
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

const Welcome = () => {
  const dispatch = useDispatch();

  const accountType = useSelector((state) => state.accountSlice.accountType);
  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const signedIn = useSelector((state) => state.accountSlice.signedIn);
  const depositPaid = useSelector((state) => state.paymentSlice.depositPaid);

  console.log("accountType = ", accountType);
  console.log("blockchainId = ", blockchainId);
  console.log("signedIn = ", signedIn);
  console.log("depositPaid = ", depositPaid);

  return (
    <div>
      <OnboardingContainer>
        <Title>
          Welcome to
          <br />
          LettingClub
        </Title>
        <WelcomeText>Please choose your account type:</WelcomeText>
        <Link to="/Authentication/Tenant" style={{ textDecoration: "none" }}>
          <AccountButton onClick={() => dispatch(setAccountType("Tenant"))}>
            Tenant
          </AccountButton>
        </Link>
        <br />
        <Link to="/Authentication/Landlord" style={{ textDecoration: "none" }}>
          <AccountButton onClick={() => dispatch(setAccountType("Landlord"))}>
            Landlord
          </AccountButton>
        </Link>
        <br />
        <Link
          to="/Authentication/LettingAgency"
          style={{ textDecoration: "none" }}
        >
          <AccountButton
            onClick={() => dispatch(setAccountType("LettingAgency"))}
          >
            Letting Agency
          </AccountButton>
        </Link>
        <InfoText>
          Decentralised letting platform that <br /> operates on the Ethereum
          Blockchain.
        </InfoText>
      </OnboardingContainer>
      <Panel>
        <PanelImage src={Homes} />
      </Panel>
    </div>
  );
};

export default Welcome;
