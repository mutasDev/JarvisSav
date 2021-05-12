from flask import Flask
import magichue



app = Flask(__name__)



@app.route("/toggle")
def toggle():
    light = magichue.Light('192.168.0.6')
    if not light.on:
        light.on = True
    else:
        light.on = False
    return True

def white():
    light = magichue.Light('192.168.0.6')
    light.cw = 0
    light.w = 255
    light.on = True
    light.mode = magichue.NORMAL    

@app.route("/blue")
def blue():
    light = magichue.Light('192.168.0.6')
    light.mode = magichue.RAINBOW_CROSSFADE
    return True
    

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8081, debug=False)
