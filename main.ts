input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
})
radio.onReceivedString(function (receivedString) {
    while (true) {
        basic.showString(receivedString)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("HAPPY BIRTHDAY")
})
radio.setGroup(123)
