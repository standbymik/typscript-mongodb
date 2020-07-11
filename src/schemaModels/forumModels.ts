import mongoose, { Schema, Document } from 'mongoose';

export interface IForum extends Document {
    title: string;
    name: string;
    content: string;
}

const ForumSchema: Schema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true }
});

// Export the model and return your IUser interface
export default mongoose.model<IForum>('Forum', ForumSchema);