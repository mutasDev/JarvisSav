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
    return "okey"

@app.route("/rgb/<r>/<g>/<b>")
def data(r, g, b):
    light = magichue.Light('192.168.0.6')
    light.on = True
    light.rgb = (r, g, b)
    return "okey"

@app.route("/white")
def white():
    light = magichue.Light('192.168.0.6')
    light.cw = 0
    light.w = 255
    light.on = True
    light.mode = magichue.NORMAL
    return "okey"

@app.route("/rainbow")
def blue():
    light = magichue.Light('192.168.0.6')
    light.mode = magichue.RAINBOW_CROSSFADE
    return "okey"
    

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8081, debug=False)
