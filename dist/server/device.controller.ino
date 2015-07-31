RCSwitch devices = RCSwitch();
MemoryStore store;
EepromStream deviceTape(1024, 4096);
bool shouldPersist = false;

void initDeviceController(){
  devices.enableTransmit(14);
  deviceTape.init();
  store.init(&deviceTape);
}

void persistIfRequired(){
 if(shouldPersist){
   deviceTape.rewind();
   store.streamTo(&deviceTape);
   deviceTape.flush();
   shouldPersist = false;
 }
}

void saveDeviceState(aJsonObject * device){
  bool deviceIsOn = aJson.getObjectItem(device, "isOn")->valuebool;
  int deviceGroup = aJson.getObjectItem(device, "group")->valueint;
  int deviceDevice = aJson.getObjectItem(device, "device")->valueint;

  if (deviceIsOn) {
    devices.switchOn(deviceGroup, deviceDevice);
  } else {
    devices.switchOff(deviceGroup, deviceDevice);
  }

  shouldPersist = true;
}

void createDevice(Request &req, Response &res) {
  aJsonObject *device = store.save(&req);

  if (!device) {
    res.fail();
  } else {
    int id = aJson.getObjectItem(device, "_id")->valueint;
    saveDeviceState(device);
    res.created();
    store.streamTo(&res, id);
  }
}

void updateDevice(Request &req, Response &res) {
  aJsonObject *device = store.save(&req);

  if (!device) {
    res.fail();
  } else {
    int id = atoi(req.route("id"));
    saveDeviceState(device);
    res.success();
    store.streamTo(&res, id);
  }
}

void deleteDevice(Request &req, Response &res) {
  int id = atoi(req.route("id"));
  store.remove(id);
  res.noContent();
  shouldPersist = true;
}

void readDevices(Request &req, Response &res) {
  res.success();
  store.streamTo(&res);
}
