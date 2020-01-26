CREATE TABLE public.plant {
  plant_id character varying(25) PRIMARY KEY NOT NULL,
  name character varying(25) NOT NULL,
  added_datetime timestamp with time zone NOT NULL DEFAULT NOW(),
  last_watered timestamp with time zone,
  days_to_wait numeric NOT NULL DEFAULT 1
};
