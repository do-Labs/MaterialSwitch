# MaterialSwitch

MaterialSwitch is a demo fullstack web application for the ESP8266.

<img src="https://s3-us-west-2.amazonaws.com/www.awot.net/materialswitch/material_switch_ui.gif" alt="MaterialSwitch UI" width="360px">

This project was generated using the [AngularJS Arduino generator](https://github.com/lasselukkari/generator-angular-arduino)

## Hardware
<img src="https://s3-us-west-2.amazonaws.com/www.awot.net/materialswitch/material_switch_hardware.jpg" alt="MaterialSwitch HardWare">

## Required Arduino libraries:
* [rc-switch](https://github.com/sui77/rc-switch)
* [aJson](https://github.com/interactive-matter/aJson)
* [aWOT](https://github.com/lasselukkari/aWOT)
* [EepromStream](https://github.com/lasselukkari/EepromStream)
* [MemoryStore](https://github.com/lasselukkari/MemoryStore)

## Usage:
Install bower and npm dependencies and edit the serial port name in the Gruntfile and build and upload using the `grunt` command. 

If you just want to try out the sketch download the content of the dist/server folder and open it in the Arduino IDE and upload the sketch manually.

