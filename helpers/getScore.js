const getPasswordScore = ({ ownerPin }) => {
    let score = 0;
    ownerPin.length > 8 && ownerPin.length < 20 ? score += 1 : score += 0;
    (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(ownerPin) ? score += 1 : score += 0;
    (/[a-z]/).test(ownerPin) ? score += 1 : score += 0;
    (/[A-Z]/).test(ownerPin) ? score += 1 : score += 0;
    (/[0-9]/).test(ownerPin) ? score += 1 : score += 0;
    return score;
}

const getBasicScore = ({ title, gender, firstName, lastName, dob, ownerEmail, ownerPin }) => {
    let score = 0;

    if (title) {
        score += 1;
    }
    if (gender) {
        score += 1;
    }
    if (firstName) {
        score += 0.5;
    }
    if (lastName) {
        score += 0.5;
    }
    if (dob) {
        score += 1;
    }
    if (ownerEmail) {
        score += 1;
    }
    if (ownerPin) {
        score += getPasswordScore({ ownerPin });
    }
    return score;
}


const getPersonalScore = ({ personalDetails }) => {
    let score = 0;

    if (personalDetails.city) {
        score += 1;
    }
    if (personalDetails.eiCopy) {
        score += 1;
    }
    if (personalDetails.emiratesId) {
        score += 2;
    }
    if (personalDetails.nation) {
        score += 1;
    }
    if (personalDetails.ownerName) {
        score += 1;
    }
    if (personalDetails.passportCopy) {
        score += 1;
    }
    if (personalDetails.passportExpDate) {
        score += 1;
    }
    if (personalDetails.passportNumber) {
        score += 1;
    }
    if (personalDetails.residentialAddress) {
        score += 1;
    }

    return score;

}

const getCardScore = ({ cardDetails }) => {
    let score = 0;

    if (cardDetails.bankName) {
        score += 1;
    }
    if (cardDetails.cardExpiry) {
        score += 2;
    }
    if (cardDetails.cardNumber) {
        score += 2;
    }
    if (cardDetails.cardType) {
        score += 1;
    }
    if (cardDetails.ibanNum) {
        score += 2;
    }
    if (cardDetails.nameOnCard) {
        score += 2;
    }
    return score;
}

const getBankScore = ({ bankDetails }) => {
    let score = 0;

    if (bankDetails.bankAcNo) {
        score += 2;
    }
    if (bankDetails.bankBranch) {
        score += 2;
    }
    if (bankDetails.bankName) {
        score += 2;
    }
    if (bankDetails.ibanNo) {
        score += 2;
    }
    if (bankDetails.vatNumber) {
        score += 2;
    }
    return score;
}




const getAddressScore = ({ addressDetails }) => {
    let score = 0;
    if (addressDetails.acntNum) {
        score += 1;
    }
    if (addressDetails.address) {
        score += 2;
    }
    if (addressDetails.bankName) {
        score += 1;
    }
    if (addressDetails.contact) {
        score += 1;
    }
    if (addressDetails.faxNumber) {
        score += 1;
    }
    if (addressDetails.ibanNum) {
        score += 1;
    }
    if (addressDetails.location) {
        score += 1;
    }
    if (addressDetails.name) {
        score += 1;
    }
    if (addressDetails.website) {
        score += 1;
    }

    return score;
}

const getLicenseScore = ({ licenseDetails }) => {
    let score = 0;

    if (licenseDetails.attachEcCopy) {
        score += 2;
    }
    if (licenseDetails.attachLicenseCopy) {
        score += 2;
    }
    if (licenseDetails.companyName) {
        score += 1;
    }
    if (licenseDetails.establishNumber) {
        score += 1;
    }
    if (licenseDetails.licenceNumber) {
        score += 2;
    }
    if (licenseDetails.licencerName) {
        score += 1;
    }
    if (licenseDetails.licenseExpiry) {
        score += 1;
    }

    return score;


}

const getBusinessScore = ({ businessDetails }) => {
    let score = 0;

    if (businessDetails.annuTurnover) {
        score += 2;
    }
    if (businessDetails.businessYears) {
        score += 2;
    }
    if (businessDetails.employees) {
        score += 3;
    }
    if (businessDetails.outlets) {
        score += 3;
    }

    return score;
}

const getStaffScore = ({ staffDetails }) => {
    let score = 0;

    if (staffDetails.staffName) {
        score += 1;
    }
    if (staffDetails.emiratesId) {
        score += 1;
    }
    if (staffDetails.mobileNumber) {
        score += 1;
    }
    if (staffDetails.joiningDate) {
        score += 1;
    }
    if (staffDetails.staffVisaNumber) {
        score += 1;
    }
    if (staffDetails.staffAcNumber) {
        score += 1;
    }
    if (staffDetails.staffBankName) {
        score += 1;
    }
    if (staffDetails.basicSal) {
        score += 1;
    }
    if (staffDetails.homeAllowance) {
        score += 0.5;
    }
    if (staffDetails.transAllowance) {
        score += 0.5;
    }
    if (staffDetails.bonus) {
        score += 0.5;
    }
    if (staffDetails.ibanNum) {
        score += 0.5;
    }

    return score;
}

const getTotalScore = ({ basicScore, personalScore, cardScore, bankScore, addressScore, licenseScore, staffScore, businessScore }) => {
    let totalScore = 0;

    if (cardScore) {
        totalScore = (basicScore + personalScore + cardScore + addressScore + licenseScore + staffScore + businessScore) / 7;
    } else {
        totalScore = (basicScore + personalScore + bankScore + addressScore + licenseScore + staffScore + businessScore) / 7;
    }
    return parseInt(totalScore);
}

module.exports = {
    getBasicScore,
    getPersonalScore,
    getCardScore,
    getBankScore,
    getAddressScore,
    getLicenseScore,
    getBusinessScore,
    getStaffScore,
    getTotalScore,
    getPasswordScore,
}