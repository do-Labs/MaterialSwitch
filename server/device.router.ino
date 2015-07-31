Router deviceRouter("/api/devices");


void DeviceRouter(WebApp &app) {
  initDeviceController();

  deviceRouter.get("/", &readDevices);
  deviceRouter.post("/", &createDevice);
  deviceRouter.put("/:id", &updateDevice);
  deviceRouter.del("/:id", &deleteDevice);

  app.use(&deviceRouter);
}
