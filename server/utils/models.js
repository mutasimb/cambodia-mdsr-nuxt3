import { model } from "mongoose";

import UserSchema from "../schemas/Users";
import FieldSchema from "../schemas/Fields";
import MachineSchema from "../schemas/Machines";
import ServiceSchema from "../schemas/Services";

export const Users = model("users", UserSchema);
export const Fields = model("fields", FieldSchema);
export const Machines = model("machines", MachineSchema);
export const Services = model("services", ServiceSchema);
