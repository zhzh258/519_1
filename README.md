# Project structure
- `/Node`: The Node.js version of the project
  - `/Node/WEB`: The wrapped App. Deploy it to **Azure App Service**
    - `/Node/WEB/frontend`: The React frontend code.
    - `/Node/WEB/index.js`: Run `node /Node/WEB/index.js` to start the app.
  - `/Node/API1`: This API is an Azure Function. Deploy it to **Azure Function**.
  - `/Node/API2`: This API is an Azure Function wrapped in a Docker. Deploy it to **Azure Container App**.
  
- `/C_Sharp`: The C# version of the project

# CI/CD workflows
- azure-container-app.yml
  - Deploy API2 to Azure Container App
  - Triggered on
    1. main push with modification to "Node/API2/**"
    2. manually

- azure-functions-app-nodejs.yml
  - Deploy API1 to Azure Function App
  - Triggered on main push with modification to "Node/API1/**"
 
- main.yml
  - Deploy Node.js to Azure Web App
  - Triggered on main push with modification to "Node/Web/**"

  
