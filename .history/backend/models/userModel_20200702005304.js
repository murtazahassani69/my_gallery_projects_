import mongoose from 'mongoose'

const userSceme = new mongoose.Schema({
      name: { type: String, required: true },
      email: {type: String, required: true, unique: true },
      password : {type: String, required: true },
      isA: {type: String, required: true },
})