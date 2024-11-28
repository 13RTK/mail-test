import { signup } from "./services/apiAuth.js";

const email = "fswwdza@gmail.com";
const password = "123456";

const data = await signup(email, password);

console.log(data);
