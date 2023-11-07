import { connect as mongooseConnect, connection } from "mongoose";

const dbPath = process.env.DATABASE_URL as string;

export const connect = async (): Promise<void> => {
  await mongooseConnect(dbPath);
};

export const close = (): Promise<void> => connection.close();
