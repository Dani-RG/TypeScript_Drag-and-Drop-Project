import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
// remove the .js extension, for webpack to work

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
