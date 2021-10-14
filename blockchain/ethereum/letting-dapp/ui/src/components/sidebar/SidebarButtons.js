import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GlobalTheme } from "../../styles/theme.js";
import { setPressedButton } from "../../redux/slices/dashboardSlice";
import { MdAccountBalance as Account } from "react-icons/md";
import { IoDocuments as Deposit } from "react-icons/io5";
import { RiSecurePaymentFill as Payments } from "react-icons/ri";
import { IoInformationCircle as About } from "react-icons/io5";
import { HiDocumentAdd as NewTenancy } from "react-icons/hi";
import { HiDocumentDuplicate as Tenancies } from "react-icons/hi";
import { BsPeopleFill as Tenants } from "react-icons/bs";
import { IoHome as Properties } from "react-icons/io5";
import { IoPeopleCircle as Landlords } from "react-icons/io5";

const Button = styled.div`
  height: 3.2rem;
  width: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.7rem;
  background-color: ${({ theme }) => theme.skobeloff};
  color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.gunmetal
      : ({ theme }) => theme.mintCream};
  font-size: 1.3rem;
  text-align: center;
  font-family: "IBMPlexSansCondensed-Regular";
  &:hover {
    background-color: ${({ theme }) => theme.grayWeb};
    cursor: pointer;
  }
`;

const SidebarButtons = () => {
  const dispatch = useDispatch();
  const accountType = useSelector((state) => state.accountSlice.accountType);
  const pressedButton = useSelector(
    (state) => state.dashboardSlice.pressedButton
  );

  return accountType === "Tenant" ? (
    <>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Account"))}
        selected={pressedButton === "Account" ? true : false}
      >
        Account
        <Account
          size="1.2em"
          color={
            pressedButton === "Account"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Deposit"))}
        selected={pressedButton === "Deposit" ? true : false}
      >
        Deposit
        <Deposit
          size="1.2em"
          color={
            pressedButton === "Deposit"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Payments"))}
        selected={pressedButton === "Payments" ? true : false}
      >
        Payments
        <Payments
          size="1.2em"
          color={
            pressedButton === "Payments"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("About"))}
        selected={pressedButton === "About" ? true : false}
      >
        About
        <About
          size="1.2em"
          color={
            pressedButton === "About"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
    </>
  ) : accountType === "Landlord" ? (
    <>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Account"))}
        selected={pressedButton === "Account" ? true : false}
      >
        Account
        <Account
          size="1.2em"
          color={
            pressedButton === "Account"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("NewTenancy"))}
        selected={pressedButton === "NewTenancy" ? true : false}
      >
        New Tenancy
        <NewTenancy
          size="1.2em"
          color={
            pressedButton === "NewTenancy"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Tenancies"))}
        selected={pressedButton === "Tenancies" ? true : false}
      >
        Tenancies
        <Tenancies
          size="1.2em"
          color={
            pressedButton === "Tenancies"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Tenants"))}
        selected={pressedButton === "Tenants" ? true : false}
      >
        Tenants
        <Tenants
          size="1.2em"
          color={
            pressedButton === "Tenants"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Properties"))}
        selected={pressedButton === "Properties" ? true : false}
      >
        Properties
        <Properties
          size="1.2em"
          color={
            pressedButton === "Properties"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("About"))}
        selected={pressedButton === "About" ? true : false}
      >
        About
        <About
          size="1.2em"
          color={
            pressedButton === "About"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
    </>
  ) : accountType === "LettingAgency" ? (
    <>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Account"))}
        selected={pressedButton === "Account" ? true : false}
      >
        Account
        <Account
          size="1.2em"
          color={
            pressedButton === "Account"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("NewTenancy"))}
        selected={pressedButton === "NewTenancy" ? true : false}
      >
        New Tenancy
        <NewTenancy
          size="1.2em"
          color={
            pressedButton === "NewTenancy"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Tenancies"))}
        selected={pressedButton === "Tenancies" ? true : false}
      >
        Tenancies
        <Tenancies
          size="1.2em"
          color={
            pressedButton === "Tenancies"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Landlords"))}
        selected={pressedButton === "Landlords" ? true : false}
      >
        Landlords
        <Landlords
          size="1.2em"
          color={
            pressedButton === "Landlords"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Tenants"))}
        selected={pressedButton === "Tenants" ? true : false}
      >
        Tenants
        <Tenants
          size="1.2em"
          color={
            pressedButton === "Tenants"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("Properties"))}
        selected={pressedButton === "Properties" ? true : false}
      >
        Properties
        <Properties
          size="1.2em"
          color={
            pressedButton === "Properties"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
      <br />
      <br />
      <Button
        onClick={() => dispatch(setPressedButton("About"))}
        selected={pressedButton === "About" ? true : false}
      >
        About
        <About
          size="1.2em"
          color={
            pressedButton === "About"
              ? GlobalTheme.gunmetal
              : GlobalTheme.mintCream
          }
        />
      </Button>
    </>
  ) : null;
};

export default SidebarButtons;
