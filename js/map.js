ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [36.543540, 32.008375],
                zoom: 15,
                
            }),
              myGeoObject = new ymaps.GeoObject({
              // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [36.543540, 32.008375]
                },
                properties: {
                  // Контент метки.
                  iconContent: '',
                  
            }
            });
            myMap.geoObjects
                .add(myGeoObject)
          };