import mongoose from 'mongoose';

const telemetryGeoFencingSchema = new mongoose.Schema({
    latitude: String,
    longitude: String,
    geo_fence_status: String,
    timestamp: Date
}, { collection: 'esp32datas' }); // change to your collection name

const TelemetryGeoFencing = mongoose.model('TelemetryGeoFencing', telemetryGeoFencingSchema);

export default TelemetryGeoFencing;
