import type { baseInitialStateI } from "./baseInitialState.interface";

export interface authI extends baseInitialStateI {
  id: string;
  name: string;
  phone: string;
  email: string;
}
