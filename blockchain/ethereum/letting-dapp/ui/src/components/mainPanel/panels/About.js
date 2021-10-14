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

const InfoText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const About = () => {
  const accountType = useSelector((state) => state.accountSlice.accountType);

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Info</HeadingText>
        </Heading>
        <Content>
          {accountType === "Tenant" ? (
            <InfoText>
              Tenants can use this platform to pay their security deposit and
              rental payments to their landlord or letting agency.
            </InfoText>
          ) : accountType === "Landlord" ? (
            <InfoText>
              Landlords can use this platform to manage their tenants,
              tenancies, and rental properties.
            </InfoText>
          ) : accountType === "LettingAgency" ? (
            <InfoText>
              Letting Agencies can use this platform to manage their tenants,
              landlords, tenancies, and rental properties.
            </InfoText>
          ) : null}
        </Content>
      </Section>
    </Container>
  );
};

export default About;
