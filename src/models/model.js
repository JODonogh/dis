import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ListSchema = new Schema({
    Title: {
        type: String,
        required: 'Enter a title'
    }, 
    Status: Boolean,
    created_date: {
        type: Date,
        default: Date.now
    }
});