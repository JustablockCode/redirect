import os
os.system("pip install -U scratchattach")

import scratchattach as scratch3

from PIL import Image
import requests
from io import BytesIO

session = scratch3.login("USERNAME", "PASSWORD")
conn = session.connect_cloud("PROJECTID") 

client = scratch3.CloudRequests(conn)

def rgb_to_hex(rgb):
    r, g, b = rgb
    r = max(0, min(r, 255))
    g = max(0, min(g, 255))
    b = max(0, min(b, 255))
    
    hex_color = "{:02X}{:02X}{:02X}".format(r, g, b)
    
    return hex_color


def generatePfp(usertopfp,resolution):
    print(f"Generating pfp for user {usertopfp} with resolution {resolution}")
    userVar = scratch3.get_user(usertopfp)
    userVar.update()
    req = requests.get(userVar.icon_url).content
    req = BytesIO(req)
    Img = Image.open(req)
    Img = Img.rotate(90)
    Img = Img.convert("RGB")
    Img = Img.resize((int(resolution),int(resolution)))
    pixelList = []
    for pixelX in range(Img.width):
        for pixelY in range(Img.height):
            pixel = Img.getpixel((pixelX, pixelY))
            pixel = rgb_to_hex(pixel)
            pixelList.append(pixel)
    return pixelList



@client.request
def getpfp(argument1, argument2):
    print(f"PFP requested for user {argument1} and resolution {argument2}")
    
    return generatePfp(argument1, argument2)


@client.event
def on_ready():
    print("Request handler is running")

client.run(no_packet_loss=True)
