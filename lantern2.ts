enum onoff {
    ON,
    OFF,
}

enum LED_color {
    Red,
    yellow,
    green,
    water,
    Blue,
    purple,
    white,
}

enum akarusa {
    明るい,
    暗い,
}

enum koutei {
    以上,
    以下,
}



//% color="#ff7b00" weight=90 block="ﾗﾝﾌﾟｼｪｰﾄﾞV2.0"
namespace natumi_blocks {

    //% color="#0000cd" weight=10 block="待ち時間（秒）|%second|" group="1 基本"
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }

    //% color="#ff8c00" weight=54 blockId=eureka_fullcolor block="ＬＥＤ |%color|色 " group="2 LED制御"
    export function eureka_fullcolor(color: LED_color) {

        switch (color) {
            case LED_color.Red:
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P1, 1);
                return

            case LED_color.yellow:
                pins.digitalWritePin(DigitalPin.P16, 1);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P1, 1);
                return

            case LED_color.green:
                pins.digitalWritePin(DigitalPin.P16, 1);
                pins.digitalWritePin(DigitalPin.P15, 0);
                pins.digitalWritePin(DigitalPin.P1, 0);
                return

            case LED_color.water:
                pins.digitalWritePin(DigitalPin.P16, 1);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P1, 0);
                return

            case LED_color.Blue:
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P1, 0);
                return

            case LED_color.purple:
                pins.digitalWritePin(DigitalPin.P16, 0);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P1, 1);
                return

            case LED_color.white:
                pins.digitalWritePin(DigitalPin.P16, 1);
                pins.digitalWritePin(DigitalPin.P15, 1);
                pins.digitalWritePin(DigitalPin.P1, 1);
                return
        }
    }


    //% color="#ff8c00" weight=40 blockId=fullcolor_power block="ＬＥＤ|%color|色 明るさ|%limit| " group="2 LED制御"
    //% limit.min=0 limit.max=1023
    export function fullcolor_power(color: LED_color, limit: number) {

        switch (color) {
            case LED_color.Red:
                pins.analogWritePin(AnalogPin.P16, 0)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P1, limit)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.yellow:
                pins.analogWritePin(AnalogPin.P16, limit)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P1, limit)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.green:
                pins.analogWritePin(AnalogPin.P16, limit)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.water:
                pins.analogWritePin(AnalogPin.P16, limit)
                pins.analogWritePin(AnalogPin.P15, limit)
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.Blue:
                pins.analogWritePin(AnalogPin.P16, 0)
                pins.analogWritePin(AnalogPin.P15, limit)
                pins.analogWritePin(AnalogPin.P1, 0)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.purple:
                pins.analogWritePin(AnalogPin.P16, 0)
                pins.analogWritePin(AnalogPin.P15, limit)
                pins.analogWritePin(AnalogPin.P1, limit)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return

            case LED_color.white:
                pins.analogWritePin(AnalogPin.P16, limit)
                pins.analogWritePin(AnalogPin.P15, limit)
                pins.analogWritePin(AnalogPin.P1, limit)
                pins.analogSetPeriod(AnalogPin.P16, 2000)
                pins.analogSetPeriod(AnalogPin.P15, 2000)
                pins.analogSetPeriod(AnalogPin.P1, 2000)
                return
        }
    }

    //% color="#ff8c00" weight=38 blockId=fullcolor_mix block="ＬＥＤ混色　R|%limit1| G|%limit2| B|%limit3| " group="2 LED制御"
    //% limit1.min=0 limit1.max=1023
    //% limit2.min=0 limit2.max=1023
    //% limit3.min=0 limit3.max=1023

    export function fullcolor_mix(limit1: number, limit2: number, limit3: number) {
        pins.analogWritePin(AnalogPin.P16, limit2)
        pins.analogWritePin(AnalogPin.P15, limit3)
        pins.analogWritePin(AnalogPin.P1, limit1)
        pins.analogSetPeriod(AnalogPin.P16, 2000)
        pins.analogSetPeriod(AnalogPin.P15, 2000)
        pins.analogSetPeriod(AnalogPin.P1, 2000)
    }



    //% color="#ff8c00" weight=30 blockId=LED_erace block="ﾌﾙｶﾗｰLEDを全部OFF" group="2 LED制御"
    export function LED_erace() {
        pins.digitalWritePin(DigitalPin.P16, 0);
        pins.digitalWritePin(DigitalPin.P15, 0);
        pins.digitalWritePin(DigitalPin.P1, 0);
    }


    //% color="#a0522d" weight=36 block="人が動いたら" group="3 人感センサー"
    export function humanDetection(): boolean {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //% color="#a0522d" weight=34 blockId=IO_human block="人感ｾﾝｻ値" group="3 人感センサー"
    export function IO_human(): number {
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        return pins.digitalReadPin(DigitalPin.P14);
    }

    //% color="#a0522d"  weight=79 blockId=IO_human_DISP block="人感ｾﾝｻの値を表示する" group="3 人感センサー"
    export function IO_human_DISP() {

        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        basic.showNumber(pins.digitalReadPin(DigitalPin.P14));
    }

    //% color="#009A00"  weight=81 blockId=microbit2_decideLight block="m:bit光ｾﾝｻ値 |%limit| より |%light|時" group="4 microbitの光ｾﾝｻ"
    //% limit.min=0 limit.max=100
    export function microbit2_decideLight(limit: number, light: akarusa): boolean {
        switch (light) {
            case akarusa.明るい:
                if (input.lightLevel() / 254 * 100 > limit) {
                    return true;
                } else {
                    return false;
                }
            case akarusa.暗い:
                if (input.lightLevel() / 254 * 100 < limit) {
                    return true;
                } else {
                    return false;
                }
        }
    }


    //% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="m:bit光ｾﾝｻ値" group="4 microbitの光ｾﾝｻ"
    export function microbit2_denkitemp(): number {

        return Math.round(input.lightLevel() / 254 * 100);

    }


    //% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="m:bit光ｾﾝｻの値を表示する" group="4 microbitの光ｾﾝｻ"
    export function microbit2_denkiLED() {
        basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
    }




    //% color="#cd853f"  weight=70 blockId=tempurature_condition block="温度が |%limit| |%temp|の時" group="5 温度センサー"
    //% limit.min=-10 limit.max=50
    export function tempurature_condition(limit: number, temp: koutei): boolean {
        switch (temp) {
            case koutei.以上:

                if (BMP280.temperature() >= limit) {
                    return true;
                } else {
                    return false;
                }
            case koutei.以下:

                if (BMP280.temperature() <= limit) {
                    return true;
                } else {
                    return false;
                }
        }

    }

    //% color="#cd853f" weight=34 blockId=Temperature block="温度" group="5 温度センサー"
    export function Temperature(): number {

        return BMP280.temperature();
    }

    //% color="#cd853f"  weight=79 blockId=temperature_DISP block="温度を表示する" group="5 温度センサー"
    export function temperature_DISP() {

        basic.showNumber(BMP280.temperature())
    }



    //% color="#000080"  weight=40 blockId=press_condition block="気圧(hp)が |%limit| |%pressure|の時" group="6 気圧センサー"
    export function press_condition(limit: number, pressure: koutei): boolean {
        switch (pressure) {
            case koutei.以上:

                if (Math.round(BMP280.pressure() / 100) >= limit) {
                    return true;
                } else {
                    return false;
                }
            case koutei.以下:
                if (Math.round(BMP280.pressure() / 100) <= limit) {
                    return true;
                } else {
                    return false;
                }
        }
    }

    //% color="#000080" weight=34 blockId=press block="気圧(hp)" group="6 気圧センサー"
    export function press(): number {

        return Math.round(BMP280.pressure() / 100);
    }

    //% color="#000080"  weight=79 blockId=press_DISP block="気圧(hp)を表示する" group="6 気圧センサー"
    export function press_DISP() {

        basic.showNumber(Math.round(BMP280.pressure() / 100));
    }

}

