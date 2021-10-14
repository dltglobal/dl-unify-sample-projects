//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;

contract RentalAgreement {
    // Tenancy details
    string landlordName;
    string tenantName;
    string propertyAddress;
    string securityDepositAmount;
    string rentAmount;
    string paymentSchedule;

    constructor(
        string memory _landlordName,
        string memory _tenantName,
        string memory _propertyAddress,
        string memory _securityDepositAmount,
        string memory _rentAmount,
        string memory _paymentSchedule
    ) {
        landlordName = _landlordName;
        tenantName = _tenantName;
        propertyAddress = _propertyAddress;
        securityDepositAmount = _securityDepositAmount;
        rentAmount = _rentAmount;
        paymentSchedule = _paymentSchedule;
    }

    function setContractValues(
        string memory _landlordName,
        string memory _tenantName,
        string memory _propertyAddress,
        string memory _securityDepositAmount,
        string memory _rentAmount,
        string memory _paymentSchedule
    ) public {
        landlordName = _landlordName;
        tenantName = _tenantName;
        propertyAddress = _propertyAddress;
        securityDepositAmount = _securityDepositAmount;
        rentAmount = _rentAmount;
        paymentSchedule = _paymentSchedule;
    }
}
