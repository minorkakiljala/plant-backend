import cuid from 'cuid';

// Plant related queries

// Creates a new plant
export const createPlant = (db, data: Partial<Plant>) => {
  const sql = `
    INSERT INTO plant (plant_id, name, days_to_wait, added_datetime)
    VALUES ($[plantId], $[name], $[daysToWait], NOW())
  `;
  const params = {
    ...data,
    plantId: cuid() // Provides us a "unique" ID for our plant.
  };
  return db.one(sql, params);
};

// Get all plants
export const getPlants = db => {
  return db.any('SELECT * FROM plant');
};
