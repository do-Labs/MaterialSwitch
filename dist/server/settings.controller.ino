EepromStream settingsTape(0, 1024);
char ssidBuf[64];
char passwordBuf[64];

void initSettingsController() {
  settingsTape.init();
  memset(ssidBuf, 0, 64);
  memset(passwordBuf, 0, 64);
  settingsTape.readBytesUntil('\0', ssidBuf, 64);
  settingsTape.readBytesUntil('\0', passwordBuf, 64);
}

char * getSettingsSsid(){
  return ssidBuf;
}

char * getSettingsPassword(){
  return passwordBuf;
}

void createSettings(Request &req, Response &res) {
  settingsTape.rewind();

  settingsTape.print(req.query("ssid"));
  settingsTape.write('\0');

  settingsTape.print(req.query("password"));
  settingsTape.write('\0');

  settingsTape.flush();

  res.success("text/plain");
  res.print("Reboot the device now.");
}
