let i = 0
basic.showIcon(IconNames.Triangle)
TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
TPBot.headlightColor(0x00ff00)
basic.forever(function () {
    i = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (i < 15 && i != 0) {
        TPBot.stopCar()
        for (let index = 0; index < 3; index++) {
            TPBot.headlightColor(0x00ff00)
            basic.pause(200)
            TPBot.headlightColor(0xffff00)
            basic.pause(200)
            TPBot.headlightColor(0xff0000)
            basic.pause(200)
        }
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 30, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 30, 0.5)
        TPBot.headlightColor(0x00ff00)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
    }
})
