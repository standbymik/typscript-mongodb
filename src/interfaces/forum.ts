import mongoose, { Document } from 'mongoose'

export interface IForum extends Document {
    title: string,
    name: string,
    content: string
}