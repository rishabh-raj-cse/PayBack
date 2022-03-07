const getPasswordScore = ({ ownerPassword }) => {
    let score = 0;
    ownerPassword.length > 8 && ownerPassword.length < 20 ? score += 1 : score += 0;
    (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(ownerPassword) ? score += 1 : score += 0;
    (/[a-z]/).test(ownerPassword) ? score += 1 : score += 0;
    (/[A-Z]/).test(ownerPassword) ? score += 1 : score += 0;
    (/[0-9]/).test(ownerPassword) ? score += 1 : score += 0;
    return score;
}

const getBasicScore = ({ title, gender, firstName, lastName, dob, ownerEmail, ownerPassword }) => {
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
    if (ownerPassword) {
        score += getPasswordScore({ ownerPassword });
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
    if (cardDetails.cvvNumber) {
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

    if (addressDetails.address) {
        score += 2;
    }
    if (addressDetails.location) {
        score += 2;
    }
    if (addressDetails.primaryContact) {
        score += 2;
    }
    if (addressDetails.secondaryContact) {
        score += 2;
    }
    if (addressDetails.website) {
        score += 2;
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
}

const getStaffScore = ({ staffDetails }) => {
    let score = 0;

    if (staffDetails.staffName) {
        score += 1;
    }
    if (staffDetails.joiningDate) {
        score += 1;
    }
    if (staffDetails.salary) {
        score += 1;
    }
    if (staffDetails.sContactNumber) {
        score += 1;
    }
    if (staffDetails.pContactNo) {
        score += 1;
    }
    if (staffDetails.staffAcNumber) {
        score += 2;
    }
    if (staffDetails.staffBankName) {
        score += 1;
    }
    if (staffDetails.staffVisaNumber) {
        score += 2;
    }

    return score;
}

const getTotalScore = ({ basicScore, personalScore, cardScore, bankScore, addressScore, licenseScore, staffScore }) => {
    let totalScore = 0;
    totalScore = (basicScore + personalScore + cardScore + bankScore + addressScore + licenseScore + staffScore) / 7;
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