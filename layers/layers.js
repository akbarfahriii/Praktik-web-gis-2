var wms_layers = [];

var format_ServiceAreaND_13_DirtyAreas_0 = new ol.format.GeoJSON();
var features_ServiceAreaND_13_DirtyAreas_0 = format_ServiceAreaND_13_DirtyAreas_0.readFeatures(json_ServiceAreaND_13_DirtyAreas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_13_DirtyAreas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_13_DirtyAreas_0.addFeatures(features_ServiceAreaND_13_DirtyAreas_0);
var lyr_ServiceAreaND_13_DirtyAreas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_13_DirtyAreas_0, 
                style: style_ServiceAreaND_13_DirtyAreas_0,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_13_DirtyAreas_0.png" /> Service Area — ND_13_DirtyAreas'
            });
var format_ServiceAreaND_13_Roads_NA_SAI_1 = new ol.format.GeoJSON();
var features_ServiceAreaND_13_Roads_NA_SAI_1 = format_ServiceAreaND_13_Roads_NA_SAI_1.readFeatures(json_ServiceAreaND_13_Roads_NA_SAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_13_Roads_NA_SAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_13_Roads_NA_SAI_1.addFeatures(features_ServiceAreaND_13_Roads_NA_SAI_1);
var lyr_ServiceAreaND_13_Roads_NA_SAI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_13_Roads_NA_SAI_1, 
                style: style_ServiceAreaND_13_Roads_NA_SAI_1,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_13_Roads_NA_SAI_1.png" /> Service Area — ND_13_Roads_NA_SAI'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_ServiceAreaRoads_NA_3 = new ol.format.GeoJSON();
var features_ServiceAreaRoads_NA_3 = format_ServiceAreaRoads_NA_3.readFeatures(json_ServiceAreaRoads_NA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaRoads_NA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaRoads_NA_3.addFeatures(features_ServiceAreaRoads_NA_3);
var lyr_ServiceAreaRoads_NA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaRoads_NA_3, 
                style: style_ServiceAreaRoads_NA_3,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaRoads_NA_3.png" /> Service Area — Roads_NA'
            });
var format_Roads_4 = new ol.format.GeoJSON();
var features_Roads_4 = format_Roads_4.readFeatures(json_Roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_4.addFeatures(features_Roads_4);
var lyr_Roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_4, 
                style: style_Roads_4,
                interactive: true,
                title: '<img src="styles/legend/Roads_4.png" /> Roads'
            });
var format_ServiceAreaKeputih_Dataset_ND_Junctions_5 = new ol.format.GeoJSON();
var features_ServiceAreaKeputih_Dataset_ND_Junctions_5 = format_ServiceAreaKeputih_Dataset_ND_Junctions_5.readFeatures(json_ServiceAreaKeputih_Dataset_ND_Junctions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_5.addFeatures(features_ServiceAreaKeputih_Dataset_ND_Junctions_5);
var lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_5, 
                style: style_ServiceAreaKeputih_Dataset_ND_Junctions_5,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaKeputih_Dataset_ND_Junctions_5.png" /> Service Area — Keputih_Dataset_ND_Junctions'
            });
var format_Bus_Stops_6 = new ol.format.GeoJSON();
var features_Bus_Stops_6 = format_Bus_Stops_6.readFeatures(json_Bus_Stops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_Stops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_Stops_6.addFeatures(features_Bus_Stops_6);
var lyr_Bus_Stops_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bus_Stops_6, 
                style: style_Bus_Stops_6,
                interactive: true,
                title: '<img src="styles/legend/Bus_Stops_6.png" /> Bus_Stops'
            });

lyr_ServiceAreaND_13_DirtyAreas_0.setVisible(true);lyr_ServiceAreaND_13_Roads_NA_SAI_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_ServiceAreaRoads_NA_3.setVisible(true);lyr_Roads_4.setVisible(true);lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5.setVisible(true);lyr_Bus_Stops_6.setVisible(true);
var layersList = [lyr_ServiceAreaND_13_DirtyAreas_0,lyr_ServiceAreaND_13_Roads_NA_SAI_1,lyr_Buildings_2,lyr_ServiceAreaRoads_NA_3,lyr_Roads_4,lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5,lyr_Bus_Stops_6];
lyr_ServiceAreaND_13_DirtyAreas_0.set('fieldAliases', {'ObjectID': 'ObjectID', 'IsRetired': 'IsRetired', 'DirtyArea_Length': 'DirtyArea_Length', 'DirtyArea_Area': 'DirtyArea_Area', });
lyr_ServiceAreaND_13_Roads_NA_SAI_1.set('fieldAliases', {'OID': 'OID', 'SourceOID': 'SourceOID', 'TS1': 'TS1', 'TS2': 'TS2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Buildings_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_ServiceAreaRoads_NA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Shape_Length': 'Shape_Length', });
lyr_Roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_Bus_Stops_6.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_ServiceAreaND_13_DirtyAreas_0.set('fieldImages', {'ObjectID': '', 'IsRetired': '', 'DirtyArea_Length': '', 'DirtyArea_Area': '', });
lyr_ServiceAreaND_13_Roads_NA_SAI_1.set('fieldImages', {'OID': '', 'SourceOID': '', 'TS1': '', 'TS2': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Buildings_2.set('fieldImages', {'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_leve': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', });
lyr_ServiceAreaRoads_NA_3.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', 'Shape_Length': '', });
lyr_Roads_4.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5.set('fieldImages', {'OBJECTID': '', });
lyr_Bus_Stops_6.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_ServiceAreaND_13_DirtyAreas_0.set('fieldLabels', {'ObjectID': 'no label', 'IsRetired': 'no label', 'DirtyArea_Length': 'no label', 'DirtyArea_Area': 'no label', });
lyr_ServiceAreaND_13_Roads_NA_SAI_1.set('fieldLabels', {'OID': 'no label', 'SourceOID': 'no label', 'TS1': 'no label', 'TS2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Buildings_2.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'header label', 'type': 'inline label', 'aeroway': 'inline label', 'amenity': 'inline label', 'admin_leve': 'inline label', 'barrier': 'inline label', 'boundary': 'inline label', 'building': 'inline label', 'craft': 'inline label', 'geological': 'inline label', 'historic': 'inline label', 'land_area': 'inline label', 'landuse': 'inline label', 'leisure': 'inline label', 'man_made': 'inline label', 'military': 'inline label', 'natural': 'inline label', 'office': 'inline label', 'place': 'inline label', 'shop': 'inline label', 'sport': 'inline label', 'tourism': 'inline label', 'other_tags': 'no label', });
lyr_ServiceAreaRoads_NA_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'header label', 'highway': 'inline label', 'waterway': 'inline label', 'aerialway': 'inline label', 'barrier': 'inline label', 'man_made': 'inline label', 'railway': 'inline label', 'z_order': 'no label', 'other_tags': 'no label', 'Shape_Length': 'no label', });
lyr_Roads_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label', 'highway': 'inline label', 'waterway': 'inline label', 'aerialway': 'inline label', 'barrier': 'inline label', 'man_made': 'inline label', 'railway': 'inline label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_5.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_Bus_Stops_6.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label', 'barrier': 'inline label', 'highway': 'inline label', 'ref': 'inline label', 'address': 'inline label', 'is_in': 'inline label', 'place': 'inline label', 'man_made': 'inline label', 'other_tags': 'inline label', });
lyr_Bus_Stops_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});