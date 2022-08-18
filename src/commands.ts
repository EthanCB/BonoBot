import { Command } from "./interfaces/command";
import { Hello } from "./commands/hello";
import { Leave } from "./commands/leave";

export const Commands: Command[] = [Hello, Leave];