class TextConverter {
    getInfo() {
        return {
            "id": "textconvert",
            "name": "Text Converter",
            "blocks": [
                {
                    "opcode": "convertToLowercase",
                    "blockType": "reporter",
                    "text": "convert [TEXT] to lowercase",
                    "arguments": {
                        "TEXT": {
                            "type": "string",
                            "defaultValue": "Hello, World!"
                        }
                    }
                },
                {
                    "opcode": "convertToUppercase",
                    "blockType": "reporter",
                    "text": "convert [TEXT] to uppercase",
                    "arguments": {
                        "TEXT": {
                            "type": "string",
                            "defaultValue": "Hello, World!"
                        }
                    }
                }
            ]
        };
    }
    
    convertToLowercase({ TEXT }) {
        return TEXT.toLowerCase();
    }
    
    convertToUppercase({ TEXT }) {
        return TEXT.toUpperCase(); 
    }
}

Scratch.extensions.register(new TextConverter());
