class TurboSMS {
    getInfo () {
        return {
            id: 'TurboSMS',
            name: 'Turbo SMS',
		    color1: "#001299",
            color2: "#010057",
            color3: "#00092e",
            blocks: [
				{
                    "blockType": Scratch.BlockType.LABEL,
                    "text": "CHECK CONSOLE FOR ERRORS"
                },
				{
					"blockType": Scratch.BlockType.BUTTON,
					"text": "Get Tokens",
					"opcode": "openlogin"
				},							
                {
                    opcode: 'sendSMS',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Send SMS to [PHONENUMBER] with [MESSAGE] from Twilio phone num [TNUM] with account sid [SID] and auth token [TOKEN]',
                    arguments: {
                        PHONENUMBER: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '+1234567890',
                        },
                        MESSAGE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello from Scratch!',
                        },
						TNUM: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '+1234567890',
                        },
						SID: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'YoUr aCcOuNt sId 123',
                        },
						TOKEN: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'YoUr aUtH ToKeN 123',
                        },
                    },
                },
            ],
        };
    }
    sendSMS (args, util) {
fetch("https://api.twilio.com/2010-04-01/Accounts/" + args.SID + "/Messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(args.SID + ":" + args.TOKEN),
  },
  body: new URLSearchParams({
    From: args.TNUM,
    To: args.PHONENUMBER,
    Body: args.MESSAGE,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Message send and this is SID of it:", data.sid);
  })
  .catch((error) => {
	console.error("Error sending message:", error);
  });

	}
	openlogin () {
		window.open("https://console.twilio.com/", "_blank")
	}
}

Scratch.extensions.register(new TurboSMS());
