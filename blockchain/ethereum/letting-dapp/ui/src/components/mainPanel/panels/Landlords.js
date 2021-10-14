import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalTheme } from "../../../styles/theme.js";
import { TiDelete as Delete } from "react-icons/ti";
import {
  addLandlord,
  removeLandlord,
} from "../../../redux/slices/listSlice.js";

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

const InnerSection = styled.div`
  height: fit-content;
  width: 70vw;
  background-color: ${({ theme }) => theme.mintCream};
  border-radius: 1rem;
  margin-top: 3.5vh;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const DeleteIcon = styled.div`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const FieldText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Medium";
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const ValueText = styled.h1`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.2rem;
  margin-left: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.gunmetal};
  font-family: "IBMPlexSansCondensed-Regular";
  font-size: 1.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const NewLandlordColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
`;

const AddButton = styled.div`
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

const Landlords = () => {
  const dispatch = useDispatch();
  const [landlordName, setLandlordName] = useState("");

  const landlordList = useSelector((state) => state.listSlice.landlordList);
  console.log("landlordList = ", landlordList);

  return (
    <Container>
      <Section>
        <Heading>
          <HeadingText>Landlords List</HeadingText>
        </Heading>
        <Content>
          {!landlordList.length
            ? null
            : landlordList.map((landlord) => (
                <InnerSection key={landlord.id}>
                  <Row>
                    <FieldText>Name:</FieldText>
                    <ValueText>{landlord.name}</ValueText>
                  </Row>
                  <DeleteIcon
                    onClick={() => dispatch(removeLandlord(landlord.id))}
                  >
                    <Delete size="2em" color={GlobalTheme.gunmetal} />
                  </DeleteIcon>
                </InnerSection>
              ))}
          <br />
          <br />
          <InfoText>Add a new landlord to the list.</InfoText>
          <NewLandlordColumn>
            <ValueInput
              placeholder="Landlord's Name"
              value={landlordName}
              onChange={(event) => setLandlordName(event.target.value)}
            ></ValueInput>
            <AddButton
              onClick={() => {
                dispatch(
                  addLandlord({
                    id: Math.ceil(Math.random() * 1000),
                    name: landlordName,
                  })
                );
              }}
            >
              Add
            </AddButton>
          </NewLandlordColumn>
        </Content>
      </Section>
    </Container>
  );
};

export default Landlords;
