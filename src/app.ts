import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
// .js because we need to import them as if they were already compiled

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
