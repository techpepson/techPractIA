const app = require("express");
const bodyParser = require("body-parser");
const mongoosedata = require("mongoose");

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {
  urlParser: true,
  // useUnifiedTopology: true,
});

// const patientSchema = new mongoose.Schema({
//   surname: String,
//   othernames: String,
//   gender: String,
//   phone: String,
//   address: String,
//   emergencyName: String,
//   emergencyContact: String,
//   relationship: String,
// });

// const Patient = mongoose.model('Patient', patientSchema);

// Encounter Schema
const encounterSchema = new mongoose.Schema({
  patientId: String,
  dateTime: Date,
  encounterType: String,
});

const Encounter = mongoose.model("Encounter", encounterSchema);

// Vitals Schema
const vitalsSchema = new mongoose.Schema({
  patientId: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spO2: String,
});

const Vitals = mongoose.model("Vitals", vitalsSchema);

// API Endpoints
app.post("/api/patients", async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/encounters", async (req, res) => {
  try {
    const encounter = await Encounter.create(req.body);
    res.json(encounter);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/vitals", async (req, res) => {
  try {
    const vitals = await Vitals.create(req.body);
    res.json(vitals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/patients/:patientId", async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.patientId });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
