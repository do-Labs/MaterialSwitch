Router assetRouter("/");

void AssetRouter(WebApp &app) {

    assetRouter.get("/app/app.css", &appCss);
    assetRouter.get("/app/app.js", &appJs);
    assetRouter.get("/favicon.ico", &faviconIco);
    assetRouter.get("/", &indexHtml);
    assetRouter.get("/settings.html", &settingsHtml);

    app.use(&assetRouter);
}
