import { createContext } from "react";
import { AppUsers } from "../database/entities/AppUsers";

export const UserContext = createContext<AppUsers | undefined>(undefined);
