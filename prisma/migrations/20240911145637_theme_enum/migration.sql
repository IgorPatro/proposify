-- Step 1: Create ENUM type
CREATE TYPE "THEME" AS ENUM ('LIGHT', 'DARK');

-- Step 2: Add temporary column to store the theme
ALTER TABLE "Offer" ADD COLUMN "theme_temp" "THEME";
ALTER TABLE "Template" ADD COLUMN "theme_temp" "THEME";

-- Step 3: Populate the theme_temp based on JSON field bgPrimary
UPDATE "Offer"
SET "theme_temp" = CASE
    WHEN "theme"->>'bgPrimary' = '#000' THEN 'DARK'::"THEME"
    WHEN "theme"->>'bgPrimary' = '#fff' THEN 'LIGHT'::"THEME"
    ELSE NULL
END;

UPDATE "Template"
SET "theme_temp" = CASE
    WHEN "theme"->>'bgPrimary' = '#000' THEN 'DARK'::"THEME"
    WHEN "theme"->>'bgPrimary' = '#fff' THEN 'LIGHT'::"THEME"
    ELSE NULL
END;

-- Step 4: Drop the old theme column and rename theme_temp
ALTER TABLE "Offer" DROP COLUMN "theme";
ALTER TABLE "Offer" RENAME COLUMN "theme_temp" TO "theme";

ALTER TABLE "Template" DROP COLUMN "theme";
ALTER TABLE "Template" RENAME COLUMN "theme_temp" TO "theme";

-- Step 5: Add NOT NULL constraint (optional, if necessary)
ALTER TABLE "Offer" ALTER COLUMN "theme" SET NOT NULL;
ALTER TABLE "Template" ALTER COLUMN "theme" SET NOT NULL;