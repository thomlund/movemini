input.onButtonPressed(Button.A, function () {
    pixel_array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    pixel_array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pixel_array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    pixel_array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    pixel_array.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
})
input.onButtonPressed(Button.B, function () {
    pixel_array.clear()
    pixel_array.show()
})
let pixel_array: neopixel.Strip = null
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    pixel_array.rotate(1)
    pixel_array.show()
})
