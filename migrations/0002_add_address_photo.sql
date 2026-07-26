-- Add photo and address columns to reports table
ALTER TABLE reports ADD COLUMN photo TEXT;
ALTER TABLE reports ADD COLUMN house_no TEXT;
ALTER TABLE reports ADD COLUMN village_lane TEXT;
ALTER TABLE reports ADD COLUMN road TEXT;
ALTER TABLE reports ADD COLUMN sub_district TEXT;
ALTER TABLE reports ADD COLUMN district TEXT;
ALTER TABLE reports ADD COLUMN province TEXT;
ALTER TABLE reports ADD COLUMN postal_code TEXT;
ALTER TABLE reports ADD COLUMN latitude REAL;
ALTER TABLE reports ADD COLUMN longitude REAL;
ALTER TABLE reports ADD COLUMN title TEXT;
