const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title: {
        type: String,
    },
    gender: {
        type: String,
    },
    firstName: {
        type: String,
    },
    dob: {
        type: String
    },
    lastName: {
        type: String
    },
    ownerEmail: {
        type: String,
    },
    ownerPin: {
        type: String,
    },
    personalDetails: {
        type: Object,
    },
    cardDetails: {
        type: Object,
    },
    bankDetails: {
        type: Object,
    },
    addressDetails: {
        type: Object,
    },
    licenseDetails: {
        type: Object,
    },
    businessDetails: {
        type: Object,
    },
    staffDetails: {
        type: Object,
    },
    scores: {
        type: Object,
    }
})

module.exports = mongoose?.models?.users || mongoose.model('users', userSchema);
