import bcrypt from "bcrypt";
import invariant from "invariant";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 4);
}

export async function verifyPassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}

export function validateUsername(username: any) {
  invariant(typeof username === "string", "Username must be a string");
  invariant(username.length > 0, "Username cannot be empty");
  return username;
}

export function validatePassword(password: any) {
  invariant(typeof password === "string", "Password must be a string");
  invariant(password.length > 0, "Password cannot be empty");
  return password;
}
