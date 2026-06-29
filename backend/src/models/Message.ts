import mongoose, { type Document } from "mongoose";

export interface IMessage extends Document {
  chat: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trime:true,
      required: true,
    },
  },
  { timestamps: true },
);

// indexes for faster queries
MessageSchema.index({ chat: 1, createdAt: 1 }); // oldest one first
// 1 - asc
// -1 -> desc

export const Message = mongoose.model("Message", MessageSchema);