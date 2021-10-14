import React from "react";
import { useSelector } from "react-redux";
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

const TitleText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Medium";
  font-size: 1.6rem;
  margin-bottom: 0;
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

const InfoText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Tenancy = () => {
  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const depositPaid = useSelector((state) => state.paymentSlice.depositPaid);
  const landlordOrLettingAgencyBlockchainId = useSelector(
    (state) => state.paymentSlice.landlordOrLettingAgencyBlockchainId
  );
  const rentalAgreementBlockchainId = useSelector(
    (state) => state.paymentSlice.rentalAgreementBlockchainId
  );
  const landlordName = useSelector((state) => state.paymentSlice.landlordName);
  const tenantName = useSelector((state) => state.paymentSlice.tenantName);
  const propertyAddress = useSelector(
    (state) => state.paymentSlice.propertyAddress
  );
  const securityDepositTransactionHash = useSelector(
    (state) => state.paymentSlice.securityDepositTransactionHash
  );
  const securityDepositAmount = useSelector(
    (state) => state.paymentSlice.securityDepositAmount
  );
  const rentAmount = useSelector((state) => state.paymentSlice.rentAmount);
  const paymentSchedule = useSelector(
    (state) => state.paymentSlice.paymentSchedule
  );

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Tenancy Details</HeadingText>
        </Heading>
        {depositPaid ? (
          <Content>
            <Row>
              <TitleText>Involved Parties</TitleText>
            </Row>
            <Row>
              <FieldText>Your Blockchain ID:</FieldText>
              <ValueText>{blockchainId}</ValueText>
            </Row>
            <Row>
              <FieldText>Landlord or Letting Agency's Blockchain ID:</FieldText>
              <ValueText>{landlordOrLettingAgencyBlockchainId}</ValueText>
            </Row>
            <Row>
              <FieldText>Landlord's Name:</FieldText>
              <ValueText>{landlordName}</ValueText>
            </Row>
            <Row>
              <FieldText>Tenant's Name:</FieldText>
              <ValueText>{tenantName}</ValueText>
            </Row>
            <Row>
              <TitleText>Property Details</TitleText>
            </Row>
            <Row>
              <FieldText>Rental Agreement's Blockchain ID:</FieldText>
              <ValueText>{rentalAgreementBlockchainId}</ValueText>
            </Row>
            <Row>
              <FieldText>Address:</FieldText>
              <ValueText>{propertyAddress}</ValueText>
            </Row>
            <Row>
              <TitleText>Payment Details</TitleText>
            </Row>
            <Row>
              <FieldText>Security Deposit's Transaction Hash:</FieldText>
              <ValueText>{securityDepositTransactionHash}</ValueText>
            </Row>
            <Row>
              <FieldText>Security Deposit Amount:</FieldText>
              <ValueText>{securityDepositAmount}</ValueText>
            </Row>
            <Row>
              <FieldText>Rent Amount:</FieldText>
              <ValueText>{rentAmount}</ValueText>
            </Row>
            <Row>
              <FieldText>Schedule:</FieldText>
              <ValueText>{paymentSchedule}</ValueText>
            </Row>
            <br />
            <br />
          </Content>
        ) : (
          <InfoText>
            Please pay your security deposit before accessing your tenancy
            details.
          </InfoText>
        )}
      </Section>
    </Container>
  );
};

export default Tenancy;
