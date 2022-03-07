const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");


const connectDatabase = require("./utils/mongo");
const users = require("./schema/users");
const { getPersonalScore, getBasicScore, getTotalScore, getCardScore, getBankScore, getAddressScore, getLicenseScore, getBusinessScore, getStaffScore, getPasswordScore } = require("./helpers/getScore");


const port = 3000;
connectDatabase();

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);

app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", async (req, res) => {

    await users.find({}).then(data => {
        res.json(data);
    });
})
//CRUD OPERATIONS
app.post("/api/create", async (req, res) => {
    const { title, gender, firstName, lastName, dob, ownerEmail, ownerPassword, personalDetails, cardDetails, bankDetails, addressDetails, licenseDetails, businessDetails, staffDetails } = req.body;

    const scores = {
        basicScore: getBasicScore({ title, gender, firstName, lastName, dob, ownerEmail, ownerPassword }),
        personalScore: getPersonalScore({ personalDetails }),
        cardScore: getCardScore({ cardDetails }),
        bankScore: getBankScore({ bankDetails }),
        addressScore: getAddressScore({ addressDetails }),
        licenseScore: getLicenseScore({ licenseDetails }),
        // businessScore: getBusinessScore({ businessDetails }),
        staffScore: getStaffScore({ staffDetails }),
        passwordScore: getPasswordScore({ ownerPassword }),
    }
    scores.totalScore = getTotalScore({ basicScore: scores.basicScore || 0, personalScore: scores.personalScore || 0, cardScore: scores.cardScore || 0, bankScore: scores.bankScore || 0, addressScore: scores.addressScore || 0, licenseScore: scores.licenseScore || 0, staffScore: scores.staffScore || 0 })

    const payload = { title, gender, firstName, lastName, dob, ownerEmail, ownerPassword, personalDetails, cardDetails, bankDetails, addressDetails, licenseDetails, businessDetails, staffDetails, scores }

    const setOwner = await users.create(payload);

    res.json({ success: true, user: setOwner })

});

app.get("/api/get", async (req, res) => {
    const getOwner = await users.find({}, { _id: 1, firstName: 1, lastName: 1, staffDetails: 1, scores: 1, ownerEmail: 1, addressDetails: 1 });
    res.json(getOwner)
});

app.get("/api/get/:id", async (req, res) => {
    const getOwnerbyId = await users.findById(req.params.id);
    res.json(getOwnerbyId)
})






