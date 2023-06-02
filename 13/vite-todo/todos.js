import init from "./form";
import { getStorage } from "./storage";

const todos = getStorage("todoList") || [];
init(todos);
