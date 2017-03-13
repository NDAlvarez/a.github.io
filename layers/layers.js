var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_IMG_03100 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_0310",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_03100.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [2816, 2112],
                                imageExtent: [-1501560.128139, -2120.516303, -1498751.624242, -0.000000]
                            })
                        });

lyr_IMG_03100.setVisible(true);
var layersList = [baseLayer,lyr_IMG_03100];
