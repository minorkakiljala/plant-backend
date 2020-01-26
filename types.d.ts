interface PlantRecord {
  plant_id: string;
  name: string;
  added_datetime: Date;
  last_watered: Date;
  days_to_wait: number;
}

interface Plant {
  plantId: string;
  name: string;
  daysToWait: number;
  lastWatered: Date;
  addedDateTime: Date;
}
