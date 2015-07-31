Router settingsRouter("/api/settings");

void SettingsRouter(WebApp &app) {
  initSettingsController();

  settingsRouter.get("/", &createSettings);
  app.use(&settingsRouter);
}
