function on_forever(AnalogPin1: number): () => void {
    let x = 0
    while (true) {
        x = x + 1
        pins.servoWritePin(AnalogPin1, 360 * x)
        basic.pause(1500)
        /** pins.servo_write_pin(ServoPin2, 360*x)
        basic.pause(1000)
        pins.servo_write_pin(ServoPin3, 360*x)
        basic.pause(1000)
        pins.servo_write_pin(ServoPin4, 360*x)
        basic.pause(1000)
 */
    }
}

basic.forever(on_forever(AnalogPin.P0))
/** , ServoPin3, ServoPin4 */
