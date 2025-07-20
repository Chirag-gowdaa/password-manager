const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

//Creating a schema in mongoDB

const passwordSchema = new mongoose.Schema({
    site: String,
    username: String,
    password: String
},{timestamps: true});

const Password = mongoose.model('Password', passwordSchema);

//connecting to mongoDB
mongoose.connect(process.env.MONGO_URI,{
useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

app.post('/api/save',async(req,res) => { //post receives the data sent from frontend
  const newPass = new Password(req.body)
  await newPass.save()
})

app.get('/api/passwords',async(req,res)=>{
  const allPassword = await Password.find();
  res.status(200).json(allPassword);
})

app.delete('/api/passwords/:id',async(req,res)=>{
  const {id} = req.params;
  await Password.findByIdAndDelete(id); //this query finds the password by id and deletes it.
})
app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`)
});

// mongoose.connect() = Connects to DB

// Model = Defines what kind of data you store

// POST /api/save = Saves a password

// GET /api/passwords = Fetches all passwords