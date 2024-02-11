// MADE BY JUSTABLOCK FOR PENGUINMOD
class CustomVar {
    constructor() {
        this.variables = {};
    }

    getInfo() {
        return {
            id: "customvar",
            name: "Custom Variables",
            color1: "#00941e",
            color2: "#00661a",
            color3: "#012e00",
            blocks:[
                {
                    opcode: "varset",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "Set variable [VAR] to [VALUE]",
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        },
                        VALUE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello, world!"
                        }
                    }
                },
                {
                    opcode: "varget",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Get variable [VAR]",
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        }
                    }
                },
                {
                    opcode: "varexists",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "Variable [VAR] exists?",
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        }
                    }
                },
                {
                    opcode: "vardelete",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "Delete variable [VAR]",
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "hello"
                        }
                    }
                },
                {
                    opcode: "getallvar",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Get all variables",
                    returnType: Scratch.ArgumentType.STRING,
                    disableMonitor: true
                },
            ]
        }
    }

    varset(args) {
        if (typeof args.VAR !== 'undefined') {
            this.variables[args.VAR] = args.VALUE;
        } else {
            console.error('Variable name is not defined');
        }
    }

    varget(args) {
        if (typeof args.VAR !== 'undefined') {
            return this.variables[args.VAR] || 'undefined';
        } else {
            console.error('Variable name is not defined');
            return 'undefined';
        }
    }

    varexists(args) {
        return typeof this.variables[args.VAR] !== 'undefined';
    }

    vardelete(args) {
        delete this.variables[args.VAR];
    }
    getallvar() {
        return JSON.stringify(this.variables);
    }
}

Scratch.extensions.register(new CustomVar());
