import React, { useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { setDepositPaid } from "../../../redux/slices/paymentSlice";
import styled from "styled-components";
import { GlobalTheme } from "../../../styles/theme.js";
import PulseLoader from "react-spinners/PulseLoader";

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

const InfoText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 0;
`;

const PaymentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 21rem;
  background-color: ${({ theme }) => theme.mintCream};
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Light";
  font-size: 1.2rem;
  text-align: start;
  padding-left: 1rem;
  border-radius: 0.5rem;
  border: 0;
`;

const Button = styled.div`
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

const SpinnerContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  height: fit-content;
  width: fit-content;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Deposit = () => {
  const dispatch = useDispatch();

  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const [depositAmount, setDepositAmount] = useState("");
  const [landlordOrLettingAgencyId, setLandlordOrLettingAgencyId] =
    useState("");
  const [loading, setLoading] = useState(false);

  // Request current user's blockchain ID
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Handle deposit payment
  const handleDeposit = async () => {
    setLoading(true);

    // Check if the browser has MetaMask setup for conducting the transaction
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Transfer the amount to the landlord or letting agency
      const parameters = [
        {
          from: blockchainId,
          to: landlordOrLettingAgencyId,
          value: ethers.utils.parseUnits(depositAmount, "ether").toHexString(),
        },
      ];

      const transactionHash = await provider.send(
        "eth_sendTransaction",
        parameters
      );

      alert(
        `Transaction Hash: ${transactionHash}\n\n${depositAmount} ETH successfully sent to the following Blockchain ID: ${landlordOrLettingAgencyId}`
      );
    } else {
      console.log("Metamask not found on this browser.");
    }

    dispatch(setDepositPaid(true));
    setLoading(false);
  };

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Deposit Payment</HeadingText>
        </Heading>
        <Content>
          <InfoText>
            Confirm the creation of your rental agreement with your landlord or
            letting agency before making the following payment.
            <br />
            <br />
            Please enter your security deposit amount and your landlord or
            letting agency's blockchain ID.
          </InfoText>
          {loading ? (
            <SpinnerContainer>
              <PulseLoader
                color={GlobalTheme.skobeloff}
                loading={loading}
                size={20}
              />
            </SpinnerContainer>
          ) : (
            <PaymentColumn>
              <Input
                placeholder="ETH"
                onChange={(event) => setDepositAmount(event.target.value)}
              ></Input>
              <br />
              <br />
              <Input
                placeholder="Account ID"
                onChange={(event) =>
                  setLandlordOrLettingAgencyId(event.target.value)
                }
              ></Input>
              <br />
              <br />
              <Button onClick={() => handleDeposit()}>Pay</Button>
            </PaymentColumn>
          )}
        </Content>
      </Section>
    </Container>
  );
};

export default Deposit;
