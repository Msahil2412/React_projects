const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace <your-mongodb-url> with your actual MongoDB connection string
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define a Mongoose schema and model
const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const FormData = mongoose.model('FormData', FormSchema);

// Define a POST route to save form data
app.post('/submit', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newForm = new FormData({ name, email });
        await newForm.save();
        res.status(201).json({ message: 'Data saved successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});