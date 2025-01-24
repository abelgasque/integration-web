export const environment = {
  production: true,  
  urlApi: "https://localhost:44397/api",
  tokenWhitelistedDomains: [ new RegExp('localhost:44397') ],
  tokenBlacklistedRoutes: [ 
    new RegExp('\/security\/login'),
  ]
};
