import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mi7rtfggj:1243@cluster1.ix2zkkn.mongodb.net/")
    .then(() => console.log('Connected!'))
    .catch(() => console.log("Not Connected!"));