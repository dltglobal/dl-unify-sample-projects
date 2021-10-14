import React from "react";
import { useSelector } from "react-redux";
import Account from "./panels/Account.js";
import Deposit from "./panels/Deposit.js";
import Payments from "./panels/Payments.js";
import About from "./panels/About.js";
import NewTenancy from "./panels/NewTenancy.js";
import Tenancies from "./panels/Tenancies.js";
import Tenants from "./panels/Tenants.js";
import Properties from "./panels/Properties.js";
import Landlords from "./panels/Landlords.js";

const PanelManager = ({}) => {
  const pressedButton = useSelector(
    (state) => state.dashboardSlice.pressedButton
  );
  return pressedButton === "Account" ? (
    <Account />
  ) : pressedButton === "Deposit" ? (
    <Deposit />
  ) : pressedButton === "Payments" ? (
    <Payments />
  ) : pressedButton === "About" ? (
    <About />
  ) : pressedButton === "NewTenancy" ? (
    <NewTenancy />
  ) : pressedButton === "Tenancies" ? (
    <Tenancies />
  ) : pressedButton === "Tenants" ? (
    <Tenants />
  ) : pressedButton === "Properties" ? (
    <Properties />
  ) : pressedButton === "Landlords" ? (
    <Landlords />
  ) : null;
};

export default PanelManager;
