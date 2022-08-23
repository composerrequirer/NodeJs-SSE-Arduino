# Node Js SSE & Arduino

## Objective:
In this code we are using the `serialport` library to wait for temperature update from arudino and then
we send this update to the UI by and SSE. 

## Arduino code:
   ```cpp
    /*
     The sensor used for this project was the lm35 temperature sensor.
     The arduino is connected to "COM3", you can change this in the node js
     code, it's on the 'events.ts file'.
    */

    void setup() {
        Serial.begin(9600);
        pinMode(A0, INPUT);
    }

    void loop() {
        int vsem = 0;
        int temp = 0;
        vsem = analogRead(A0);
        temp = map(vsem, 0, 1023, 0, 500);
        Serial.print(temp);
        delay(5000);
    }