import nodemailer from "nodemailer";
import { config } from "./config";

const throwMissingVariableError = (variable: string) => {
  throw Error(
    `The nodemailer ${variable} is not set. Check your environment variables.`
  );
};

const host = config?.transporter?.host;
const port = config.transporter.port;
const user = config.transporter.auth.user;
const pass = config.transporter.auth.pass;
const target = config.target;

if (!host) {
  throwMissingVariableError("host");
}
if (!port) {
  throwMissingVariableError("port");
}
if (!user) {
  throwMissingVariableError("user");
}
if (!pass) {
  throwMissingVariableError("pass");
}

if (!target) {
  throwMissingVariableError("target");
}

export const transporter = nodemailer.createTransport(config.transporter);
