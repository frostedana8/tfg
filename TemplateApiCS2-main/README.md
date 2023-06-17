# TemplateApiCS2

## Instalar dotnet

https://learn.microsoft.com/en-us/dotnet/core/install/linux-debian


## OpenApi Client Generator

https://openapi-generator.tech/#try


```sh
npm install @openapitools/openapi-generator-cli
```

```sh
npx openapi-generator-cli generate --generator-name typescript-angular --input-spec http://localhost:5000/swagger/v1/swagger.json --output src/app/services/api/
```