#include <ESP8266WiFi.h>
#include <aWOT.h>
#include <RCSwitch.h>
#include <aJSON.h>
#include <MemoryStore.h>
#include <EEPROM.h>
#include <EepromStream.h>

WiFiServer server(80);
WebApp app;
int retries = 20;

void setup() {
  Serial.begin(115200);
  EEPROM.begin(4096);

  // do not remove the comment below
  // asset router
  AssetRouter(app);

  // do not remove the comment below
  // other routers
  SettingsRouter(app);
  DeviceRouter(app);

  Serial.println("Connecting...");

  char * ssid = getSettingsSsid();
  char * password = getSettingsPassword();
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
    retries--;

    if (!retries){
      break;
    }
  }

  Serial.println();

  if (retries){
    Serial.println("WiFi connected");
    // Print the IP address
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("No connection");
    Serial.print("Wifi setup: http://");
    Serial.print(WiFi.softAPIP());
    Serial.println("/settings.html");
  }

  // Start the server
  server.begin();
  Serial.println("Server started");

}

void loop(){
  WiFiClient client = server.available();

  if (client.available()){
    app.process(&client);
    persistIfRequired();
  }
  
  delay(50);
}
