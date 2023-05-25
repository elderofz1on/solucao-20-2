HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
basic.forever(function () {
    HackbitOLEDDisplay.writeStringNewLine("Estacao Meteorologica")
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    basic.pause(2000)
    HackbitOLEDDisplay.writeStringNewLine("Dados coletados:")
    HackbitOLEDDisplay.writeString("Temp:")
    HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.temperature))
    HackbitOLEDDisplay.writeString("Umid:")
    HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))
    basic.pause(5000)
    HackbitOLEDDisplay.clear()
})
