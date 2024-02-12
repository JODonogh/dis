import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ListSchema = new Schema({
    Title: {
        type: String,
        required: 'Enter a title'
    }, 
    Status:{
        type: String,
        required: 'Enter a status'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});