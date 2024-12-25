const mongoose = require("mongoose");

// Define the schema for the "Todo" model
const todoSchema = new mongoose.Schema(
    {
        // Title of the todo item, required and must not exceed 50 characters
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        // Description of the todo item, required and must not exceed 50 characters
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        // Date when the todo item was created, defaults to the current date and time
        createdAt: {
            type: Date,
            required: true,
            default: Date.now, // Use Date.now to set the default as the current timestamp
        },
        // Date when the todo item was last updated, defaults to the current date and time
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now, // Use Date.now to set the default as the current timestamp
        },
    }
);

// Export the schema as a model named "Todo"
// This allows other parts of the application to use this model
module.exports = mongoose.model("Todo", todoSchema);
