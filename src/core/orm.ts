export const createPlantFromRelation = (plantRecord: PlantRecord): Plant => ({
  plantId: plantRecord.plant_id,
  name: plantRecord.name,
  daysToWait: plantRecord.days_to_wait,
  addedDateTime: plantRecord.added_datetime,
  lastWatered: plantRecord.last_watered
});
