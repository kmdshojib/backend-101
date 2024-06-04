import mongoose from "mongoose";

const orderItem = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: { type: Number, required: true },
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItem],
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enums:["PENDING", "CANCELED", "DELIVERED",],
        default: "PENDING"
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);