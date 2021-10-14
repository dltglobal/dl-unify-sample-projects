import React, { useState } from "react";
import styled from "styled-components";
import { GlobalTheme } from "../../../styles/theme.js";
import { ethers } from "ethers";
import RentalAgreement from "../../../artifacts/contracts/RentalAgreement.sol/RentalAgreement.json";
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch, useSelector } from "react-redux";
import { addTenancy } from "../../../redux/slices/listSlice.js";

// Replace the blockchain ID below with the one that was received when deploying the smart contract
const rentalAgreementBlockchainId =
  "0x65BCa04FA8A59eA85394907BB784a2E612b7a940";

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

const ValueInput = styled.input`
  height: 2rem;
  width: 21rem;
  background-color: ${({ theme }) => theme.mintCream};
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Light";
  font-size: 1.2rem;
  text-align: left;
  padding-left: 1rem;
  margin-left: 1.2rem;
  border-radius: 0.5rem;
  border: 0;
`;

const DropDownInput = styled.select`
  height: 2rem;
  width: 21rem;
  background-color: ${({ theme }) => theme.mintCream};
  color: ${({ theme }) => theme.gunmetal};
  -webkit-appearance: none;
  font-family: "IBMPlexSansCondensed-Light";
  font-size: 1.2rem;
  text-align: left;
  padding-left: 1rem;
  margin-left: 1.2rem;
  border: 0;
  border-radius: 0.5rem;
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

const UploadButton = styled.div`
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

const NewTenancy = () => {
  const dispatch = useDispatch();

  // Access necessary redux state values
  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const accountType = useSelector((state) => state.accountSlice.accountType);
  const landlordList = useSelector((state) => state.listSlice.landlordList);
  const tenantList = useSelector((state) => state.listSlice.tenantList);
  const propertyList = useSelector((state) => state.listSlice.propertyList);

  // Create options for the dropdown menus
  const landlordOptions = landlordList.map((landlord) => {
    return {
      id: landlord.id,
      name: landlord.name,
    };
  });

  const tenantOptions = tenantList.map((tenant) => {
    return {
      id: tenant.id,
      name: tenant.name,
    };
  });

  const propertyOptions = propertyList.map((property) => {
    return {
      id: property.id,
      address: property.address,
    };
  });

  const scheduleOptions = [
    {
      id: Math.ceil(Math.random() * 1000),
      schedule: "Weekly",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      schedule: "Biweekly",
    },
    {
      id: Math.ceil(Math.random() * 1000),
      schedule: "Monthly",
    },
  ];

  // Manage local rental agreement state values
  const [landlordName, setLandlordName] = useState(
    !landlordOptions.length ? 0 : landlordOptions[0].name
  );
  const [tenantName, setTenantName] = useState(
    !tenantOptions.length ? 0 : tenantOptions[0].name
  );
  const [address, setAddress] = useState(
    !propertyOptions.length ? 0 : propertyOptions[0].address
  );
  const [securityDeposit, setSecurityDeposit] = useState("0");
  const [rent, setRent] = useState("0");
  const [schedule, setSchedule] = useState(scheduleOptions[0].schedule);
  const [loading, setLoading] = useState(false);

  // Request current user's blockchain ID
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Handle uploading the rental agreement to the blockchain & update redux state values
  const handleUpload = async () => {
    setLoading(true);

    const id = Math.ceil(Math.random() * 1000);

    // Check if the browser has MetaMask setup for conducting the transaction
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        rentalAgreementBlockchainId,
        RentalAgreement.contracts["RentalAgreement.sol"].RentalAgreement.abi,
        signer
      );

      // Transaction sets the values for the smart contract
      const transaction = await contract.setContractValues(
        landlordName,
        tenantName,
        address,
        securityDeposit,
        rent,
        schedule
      );
      transaction.wait();

      alert(
        `Rental Agreement blockchain ID: ${rentalAgreementBlockchainId}\nCreated the Rental Agreement with the specified values on the Ethereum Blockchain!`
      );
    } else {
      console.log("Metamask not found on this browser.");
    }

    // Update redux state values for listSlice
    dispatch(
      addTenancy({
        id,
        blockchainId,
        landlordName,
        tenantName,
        rentalAgreementBlockchainId,
        address,
        securityDeposit,
        rent,
        schedule,
      })
    );

    setLoading(false);
  };

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Rental Agreement</HeadingText>
        </Heading>
        <Content>
          <InfoText>
            Create a new rental agreement and upload it to the Blockchain via a
            smart contract.
          </InfoText>
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
              <DropDownInput
                onChange={(event) => setLandlordName(event.target.value)}
              >
                <option disabled>Select your Landlord</option>
                {landlordOptions.length === 0 ? (
                  <option disabled>
                    No landlords, add one from the Landlords section
                  </option>
                ) : (
                  landlordOptions.map((landlord) => (
                    <option key={landlord.id} value={landlord.name}>
                      {landlord.name}
                    </option>
                  ))
                )}
              </DropDownInput>
            </Row>
          ) : null}
          <Row>
            <FieldText>Tenant's Name:</FieldText>
            <DropDownInput
              onChange={(event) => setTenantName(event.target.value)}
            >
              <option disabled>Select your Tenant</option>
              {tenantOptions.length === 0 ? (
                <option disabled>
                  No tenants, add one from the Tenants section
                </option>
              ) : (
                tenantOptions.map((tenant) => (
                  <option key={tenant.id} value={tenant.name}>
                    {tenant.name}
                  </option>
                ))
              )}
            </DropDownInput>
          </Row>
          <Row>
            <TitleText>Property Details</TitleText>
          </Row>
          <Row>
            <FieldText>Address:</FieldText>
            <DropDownInput onChange={(event) => setAddress(event.target.value)}>
              <option disabled>Select your Rental Property</option>
              {propertyOptions.length === 0 ? (
                <option disabled>
                  No rental properties, add one from the Properties section
                </option>
              ) : (
                propertyOptions.map((property) => (
                  <option key={property.id} value={property.address}>
                    {property.address}
                  </option>
                ))
              )}
            </DropDownInput>
          </Row>
          <Row>
            <TitleText>Payment Details</TitleText>
          </Row>
          <Row>
            <FieldText>Security Deposit Amount:</FieldText>
            <ValueInput
              placeholder="ETH"
              onChange={(event) =>
                setSecurityDeposit(Number(event.target.value))
              }
            ></ValueInput>
          </Row>
          <Row>
            <FieldText>Rent Amount:</FieldText>
            <ValueInput
              placeholder="ETH"
              onChange={(event) => setRent(Number(event.target.value))}
            ></ValueInput>
          </Row>
          <Row>
            <FieldText>Schedule:</FieldText>
            <DropDownInput
              onChange={(event) => setSchedule(event.target.value)}
            >
              {scheduleOptions.map((schedule) => (
                <option key={schedule.id} value={schedule.schedule}>
                  {schedule.schedule}
                </option>
              ))}
            </DropDownInput>
          </Row>
          <br />
          {loading ? (
            <SpinnerContainer>
              <PulseLoader
                color={GlobalTheme.skobeloff}
                loading={loading}
                size={20}
              />
            </SpinnerContainer>
          ) : (
            <ButtonRow>
              <UploadButton onClick={() => handleUpload()}>Upload</UploadButton>
            </ButtonRow>
          )}
        </Content>
      </Section>
    </Container>
  );
};

export default NewTenancy;
