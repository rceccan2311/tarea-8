input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
pins.servoWritePin(AnalogPin.P0, 90)
