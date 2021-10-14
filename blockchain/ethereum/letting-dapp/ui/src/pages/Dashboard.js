import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SidebarButtons from "../components/sidebar/SidebarButtons.js";
import PanelManager from "../components/mainPanel/PanelManager";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  height: 8vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.skobeloff};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftHeaderText = styled.div`
  padding-left: 1rem;
  font-family: "IBMPlexSansCondensed-Bold";
  color: ${({ theme }) => theme.gunmetal};
  font-size: 2rem;
`;

const RightHeaderText = styled.div`
  padding-right: 1rem;
  font-family: "IBMPlexSansCondensed-Medium";
  color: ${({ theme }) => theme.gunmetal};
  font-size: 1.2rem;
`;

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.viridianGreen};
  position: fixed;
  top: 8vh;
  bottom: 0;
  left: 0;
  right: 0;
  height: 92vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  background-color: ${({ theme }) => theme.mintCream};
  position: fixed;
  top: 8vh;
  bottom: 0;
  left: 20vw;
  right: 0;
  height: 92vh;
  width: 80vw;
`;

const Dashboard = () => {
  const accountType = useSelector((state) => state.accountSlice.accountType);
  const blockchainId = useSelector((state) => state.accountSlice.blockchainId);
  const signedIn = useSelector((state) => state.accountSlice.signedIn);
  const depositPaid = useSelector((state) => state.paymentSlice.depositPaid);

  console.log("accountType = ", accountType);
  console.log("blockchainId = ", blockchainId);
  console.log("signedIn = ", signedIn);
  console.log("depositPaid = ", depositPaid);

  return (
    <Container>
      <Header>
        <LeftHeaderText>LettingClub</LeftHeaderText>
        <RightHeaderText>Powered by Ethereum</RightHeaderText>
      </Header>
      <div>
        <Sidebar>
          <SidebarButtons />
        </Sidebar>
        <Main>
          <PanelManager />
        </Main>
      </div>
    </Container>
  );
};

export default Dashboard;
