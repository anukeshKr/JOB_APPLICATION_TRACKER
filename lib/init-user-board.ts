import dbConnect from "./db";
import { Board, Column } from "./models"

export async function initializeUserBoard(userId: string) {
    try {
        await dbConnect();

        // check if board already exists or not 
        const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

        if (existingBoard) {
            return existingBoard;
        }

        const board = await Board.create({
            name: "Job Hunt",
            userId,
            column: []
        })

        // create default columns 
        
    } catch (error) {
        throw error
    }
}