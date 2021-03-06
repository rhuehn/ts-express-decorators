import {ConnectionOptions} from "mongoose";
import {MDBConnection} from "./MDBConnection";

// tslint:disable-next-line: no-unused-variable
declare global {
  interface IServerSettings {
    mongoose: {
      url?: string;
      connectionOptions?: ConnectionOptions;
      urls?: {[key: string]: MDBConnection};
    };
  }
}
