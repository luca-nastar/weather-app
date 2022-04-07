# Weather App

Una app que permite ver el clima actual y el pronostico de los proximos 5 dias segun la ubicacion de la direccion IP del dispositivo. Tambien permite agregar por nombre mas ciudades y mostrar los mismos datos, la temperatura actual de la ciudad que se ingreso y el pronostico de los proximos 5 dias.

## Recursos:

La app consume la api de [IP-API](https://ip-api.com/) para conocer la ubicacion actual y para obtener los datos del clima usa la API de [OpenWeatherMap](https://openweathermap.org/). Todos los llamados a las APIs se realizan con Axios y el listado de ciudades se guarda con Redux.

### Instalacion:

Para que la app funcione es necesario tener una API-KEY activa de OpenWeatherMap.
Luego de clonar el proyecto es necesario crear un archivo .env en la carpeta raiz del proyecto siguendo como ejemplo el archivo .env.example.
