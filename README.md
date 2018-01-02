# HolaWebAppBuilder
Uso basico de Web App Builder, como crear un primer widget y los trucos que se pueden presentar. en este proyecto tenemos varios widgets

## 1 AddWMS_Service
En este _Widget_ se implementa como adicionar una capa nueva al mapa, para este ejemplo se usa un servicio WMS de un servidor de mapas *GeoServer*
> mostrando que la plataforma se integra con diferentes sistemas.

## Como Instalar

1. Copiar carpeta del widget en `[web app builder]\client\stemapp\widgets`
2. modificar archivo de configuracion `config.json` o `config-demo.json` en este se debe registrar el widget \

``` json

 "widgets": [
	{
      "label": "AddWMS_Service",
      "uri": "widgets/AddWMS_Service/Widget"
    }
```




