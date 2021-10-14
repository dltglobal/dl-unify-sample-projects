import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    landlordList: [
      { id: 0, name: "Landlord 1" },
      { id: 1, name: "Landlord 2" },
      { id: 2, name: "Landlord 3" },
    ],
    tenantList: [
      { id: 0, name: "Tenant 1" },
      { id: 1, name: "Tenant 2" },
      { id: 2, name: "Tenant 3" },
    ],
    propertyList: [
      { id: 0, address: "26 Richmond St, Glasgow G1 1XH" },
      { id: 1, address: "4 Blackfriars Rd, Glasgow G1 1QL" },
    ],
    tenancyList: [
      {
        id: 0,
        creatorBlockchainId: "0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097",
        landlordName: "Mr. Landlord",
        tenantName: "Mr. Tenant",
        rentalAgreementBlockchainId:
          "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
        address: "16 Richmond St, Glasgow G1 1XQ",
        securityDeposit: 1000,
        rent: 500,
        schedule: "Biweekly",
      },
    ],
  },
  reducers: {
    addLandlord: (state, action) => {
      return {
        ...state,
        landlordList: [...state.landlordList, action.payload],
      };
    },
    removeLandlord: (state, action) => {
      return {
        ...state,
        landlordList: state.landlordList.filter(
          (landlord) => landlord.id !== action.payload
        ),
      };
    },
    addTenant: (state, action) => {
      return {
        ...state,
        tenantList: [...state.tenantList, action.payload],
      };
    },
    removeTenant: (state, action) => {
      return {
        ...state,
        tenantList: state.tenantList.filter(
          (tenant) => tenant.id !== action.payload
        ),
      };
    },
    addProperty: (state, action) => {
      return {
        ...state,
        propertyList: [...state.propertyList, action.payload],
      };
    },
    removeProperty: (state, action) => {
      return {
        ...state,
        propertyList: state.propertyList.filter(
          (property) => property.id !== action.payload
        ),
      };
    },
    addTenancy: (state, action) => {
      return {
        ...state,
        tenancyList: [...state.tenancyList, action.payload],
      };
    },
    removeTenancy: (state, action) => {
      return {
        ...state,
        tenancyList: state.tenancyList.filter(
          (tenancy) => tenancy.id !== action.payload
        ),
      };
    },
    resetlistSliceState: (state) => {
      state.landlordList = [
        { id: 0, name: "Landlord 1" },
        { id: 1, name: "Landlord 2" },
        { id: 2, name: "Landlord 3" },
      ];
      state.tenantList = [
        { id: 0, name: "Tenant 1" },
        { id: 1, name: "Tenant 2" },
        { id: 2, name: "Tenant 3" },
      ];
      state.propertyList = [
        { id: 0, address: "26 Richmond St, Glasgow G1 1XH" },
        { id: 1, address: "4 Blackfriars Rd, Glasgow G1 1QL" },
      ];
      state.tenancyList = [
        {
          id: 0,
          creatorBlockchainId: "0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097",
          landlordName: "Mr. Landlord",
          tenantName: "Mr. Tenant",
          rentalAgreementBlockchainId:
            "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
          address: "16 Richmond St, Glasgow G1 1XQ",
          securityDeposit: 1000,
          rent: 500,
          schedule: "Biweekly",
        },
      ];
    },
  },
});

export const {
  addLandlord,
  removeLandlord,
  addTenant,
  removeTenant,
  addProperty,
  removeProperty,
  addTenancy,
  removeTenancy,
  resetlistSliceState,
} = listSlice.actions;

export default listSlice.reducer;
