import mongoose from 'mongoose';

const telemetrySchema = new mongoose.Schema({
  coolant_temp_c: String,
  fuel_level_pct: String,
  intake_air_temp_c: String,
  maf_gs: String,
  odometer_km: String,
  rpm: String,
  speed_kph: String,
  throttle_pos_pct: String,
  fault_code: String,
  fault_description: String,
  geo_fence_status: String,
  timestamp: Date
}, { collection: 'YourCollectionName' }); // change to your collection name

const Telemetry = mongoose.model('Telemetry', telemetrySchema);

export default Telemetry;
