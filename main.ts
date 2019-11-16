// Ustawiamy wszystkie potrzebne zmienne
// Jak wygląda plansza:
// oś x:
// o    0   1   2
// ś 0  KK1 KK2 KK3
// y 1  KK4 KK5 KK6
//   2  KK7 KK8 KK9
//
// wpisanie do odpowiedniej zmiennej KK1-KK9 wartości innej niż "0"
// oznacza postawienie odpowiedniego symbolu
// aby sobie ułatwić - wartości które należy wpisać do zmiennych KK1-KK9 
// wpisaliśmy do zmiennych
// Kółko - KOLKO
// Krzyżyk - KRZYZYK
// bezpośrednio oznaczają jak jasno ma się świecić dioda
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

let MICHAL_1 = 0

let KRZYZYK = 0
let KOLKO = 0

// ustawiamy po którym tulelu będziemy się komunikować
// tę wartość ustawaimy parami -> każdy z graczy musi mieć tę samą grupę/tunel
// czyli pierwsza para ustawia "1" a kolejna para ustawia "2"
radio.setGroup(1)

// pozycje kursora ustawiamy w górnym lewym rogu 
y = 0
x = 0

// zerujemy całą planszę
KK1 = 0
KK2 = 0
KK3 = 0
KK4 = 0
KK5 = 0
KK6 = 0
KK7 = 0
KK8 = 0
KK9 = 0

// Kółko świeci słabo -> 10
KOLKO = 10
// Krzyżyk świeci mocno -> 255
KRZYZYK = 255

// Jeśli Michal_1 m awartość 1 to jest mój ruch - mogę postawić swój symbol
MICHAL_1 = 1

// jasność kursora
let kursor = 250



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
        KK1 = KRZYZYK
    }
    if (receivedNumber == 10) {
        KK2 = KRZYZYK
    }
    if (receivedNumber == 20) {
        KK3 = KRZYZYK
    }
    if (receivedNumber == 1) {
        KK4 = KRZYZYK
    }
    if (receivedNumber == 11) {
        KK5 = KRZYZYK
    }
    if (receivedNumber == 21) {
        KK6 = KRZYZYK
    }
    if (receivedNumber == 2) {
        KK7 = KRZYZYK
    }
    if (receivedNumber == 12) {
        KK8 = KRZYZYK
    }
    if (receivedNumber == 22) {
        KK9 = KRZYZYK
    }
})


// Główna pętla programu -> wyświetla planszę oraz pokazuje gdzie jest teraz kursor
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
 