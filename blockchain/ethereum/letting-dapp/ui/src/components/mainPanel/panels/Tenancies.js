import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GlobalTheme } from "../../../styles/theme.js";
import { TiDelete as Delete } from "react-icons/ti";
import { removeTenancy } from "../../../redux/slices/listSlice.js";

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
  align-items: center;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 0;
  text-align: center;
`;

const InnerSection = styled.div`
  height: fit-content;
  width: 70vw;
  background-color: ${({ theme }) => theme.mintCream};
  border-radius: 1rem;
  margin-top: 3.5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const DeleteIcon = styled.div`
  margin-right: 1rem;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
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

const Tenancies = () => {
  const dispatch = useDispatch();

  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const accountType = useSelector((state) => state.accountSlice.accountType);
  const tenancyList = useSelector((state) => state.listSlice.tenancyList);
  console.log("tenancyList = ", tenancyList);

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Active Tenancies</HeadingText>
        </Heading>
        <Content>
          {!tenancyList.length ? (
            <InfoText>
              No tenancies, add one from the New Tenancy section.
            </InfoText>
          ) : (
            tenancyList.map((tenancy) => (
              <InnerSection key={tenancy.id}>
                <Details>
                  <Row>
                    <TitleText>Involved Parties</TitleText>
                  </Row>
                  <Row>
                    <FieldText>Your Blockchain ID:</FieldText>
                    <ValueText>{blockchainId}</ValueText>
                  </Row>
                  {accountType === "LettingAgency" ? (
                    <Row>
                      <FieldText>Landlord's Name:</FieldText>
                      <ValueText>{tenancy.landlordName}</ValueText>
                    </Row>
                  ) : null}
                  <Row>
                    <FieldText>Tenant's Name:</FieldText>
                    <ValueText>{tenancy.tenantName}</ValueText>
                  </Row>
                  <Row>
                    <TitleText>Property Details</TitleText>
                  </Row>
                  <Row>
                    <FieldText>Rental Agreement's Blockchain ID:</FieldText>
                    <ValueText>{tenancy.rentalAgreementBlockchainId}</ValueText>
                  </Row>
                  <Row>
                    <FieldText>Address:</FieldText>
                    <ValueText>{tenancy.address}</ValueText>
                  </Row>
                  <Row>
                    <TitleText>Payment Details</TitleText>
                  </Row>
                  <Row>
                    <FieldText>Security Deposit Amount:</FieldText>
                    <ValueText>{tenancy.securityDeposit}</ValueText>
                  </Row>
                  <Row>
                    <FieldText>Rent Amount:</FieldText>
                    <ValueText>{tenancy.rent}</ValueText>
                  </Row>
                  <Row>
                    <FieldText>Schedule:</FieldText>
                    <ValueText>{tenancy.schedule}</ValueText>
                  </Row>
                </Details>
                <DeleteIcon onClick={() => dispatch(removeTenancy(tenancy.id))}>
                  <Delete size="2.5em" color={GlobalTheme.gunmetal} />
                </DeleteIcon>
              </InnerSection>
            ))
          )}
        </Content>
        <br />
        <br />
      </Section>
    </Container>
  );
};

export default Tenancies;
