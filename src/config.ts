let configJson:any = "";

if (process.env.NODE_ENV !== 'production') {
  configJson = require("./.local-config.json");
  
} else {
  configJson = require("./config.json");
}

export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    authority: configJson.authority,
    authorizationEndpoint: configJson.authorization_endpoint,
    tokenEndpoint: configJson.token_endpoint,
    revocationEndpoint: configJson.revocation_endpoint,
    endSessionEndpoint: configJson.end_session_endpoint,
    userinfoEndpoint: configJson.userinfo_endpoint,
    scopesSupported: configJson.scopes_supported,
    clientId: configJson.clientId,
    apiOrigin: configJson.apiOrigin,
    grpcApiOrigin: configJson.grpcApiOrigin,
    latestVersion: configJson.latestVersion,
    ...(audience ? { audience } : null),
  };
}
