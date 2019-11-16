input.onButtonPressed(Button.B, function () {
    if (MICHAL_1 == 1) {
        if (x == 0 && y == 0) {
            if (KK1 == 0) {
                KK1 = KOLKO
                radio.sendNumber(0)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 1 && y == 0) {
            if (KK2 == 0) {
                KK2 = KOLKO
                radio.sendNumber(10)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 2 && y == 0) {
            if (KK3 == 0) {
                KK3 = KOLKO
                radio.sendNumber(20)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 0 && y == 1) {
            if (KK4 == 0) {
                KK4 = KOLKO
                radio.sendNumber(1)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 1 && y == 1) {
            if (KK5 == 0) {
                KK5 = KOLKO
                radio.sendNumber(11)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 2 && y == 1) {
            if (KK6 == 0) {
                KK6 = KOLKO
                radio.sendNumber(21)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 0 && y == 2) {
            if (KK7 == 0) {
                KK7 = KOLKO
                radio.sendNumber(2)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 1 && y == 2) {
            if (KK8 == 0) {
                KK8 = KOLKO
                radio.sendNumber(12)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
        if (x == 2 && y == 2) {
            if (KK9 == 0) {
                KK9 = KOLKO
                radio.sendNumber(22)
                MICHAL_1 = 0
            } else {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    led.plotBrightness(x, y, 0)
    x += 1
    if (x > 2) {
        y += 1
        x = 0
    }
    if (y > 2) {
        y = 0
    }
    led.plotBrightness(x, y, 255)
})
radio.onReceivedNumber(function (receivedNumber) {
    MICHAL_1 = 1
    if (receivedNumber == 0) {
        KK1 = KRZYRZYK
    }
    if (receivedNumber == 10) {
        KK2 = KRZYRZYK
    }
    if (receivedNumber == 20) {
        KK3 = KRZYRZYK
    }
    if (receivedNumber == 1) {
        KK4 = KRZYRZYK
    }
    if (receivedNumber == 11) {
        KK5 = KRZYRZYK
    }
    if (receivedNumber == 21) {
        KK6 = KRZYRZYK
    }
    if (receivedNumber == 2) {
        KK7 = KRZYRZYK
    }
    if (receivedNumber == 12) {
        KK8 = KRZYRZYK
    }
    if (receivedNumber == 22) {
        KK9 = KRZYRZYK
    }
})
let MICHAL_1 = 0
let KRZYRZYK = 0
let KOLKO = 0
let KK9 = 0
let KK8 = 0
let KK7 = 0
let KK6 = 0
let KK5 = 0
let KK4 = 0
let KK3 = 0
let KK2 = 0
let KK1 = 0
let x = 0
let y = 0
radio.setGroup(1)
y = 0
x = 0
KK1 = 0
KK2 = 0
KK3 = 0
KK4 = 0
KK5 = 0
KK6 = 0
KK7 = 0
KK8 = 0
KK9 = 0
KOLKO = 10
KRZYRZYK = 255
MICHAL_1 = 1
let kursor = 250
basic.forever(function () {
    led.plotBrightness(0, 0, KK1)
    led.plotBrightness(1, 0, KK2)
    led.plotBrightness(2, 0, KK3)
    led.plotBrightness(0, 1, KK4)
    led.plotBrightness(1, 1, KK5)
    led.plotBrightness(2, 1, KK6)
    led.plotBrightness(0, 2, KK7)
    led.plotBrightness(1, 2, KK8)
    led.plotBrightness(2, 2, KK9)
    if (MICHAL_1 == 1) {
        led.plotBrightness(x, y, kursor)
    }
    kursor = kursor + 10
    if (kursor > 250) {
        kursor = 0
    }
})
 