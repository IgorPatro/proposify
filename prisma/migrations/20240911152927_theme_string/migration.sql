-- Step 1: Add temporary column to store the string version of `theme`
ALTER TABLE "Offer" ADD COLUMN "theme_temp" TEXT;
ALTER TABLE "Template" ADD COLUMN "theme_temp" TEXT;

-- Step 2: Copy ENUM values to the new `theme_temp` column as strings
UPDATE "Offer"
SET "theme_temp" = "theme"::TEXT;

UPDATE "Template"
SET "theme_temp" = "theme"::TEXT;

-- Step 3: Drop the old `theme` column and rename `theme_temp` to `theme`
ALTER TABLE "Offer" DROP COLUMN "theme";
ALTER TABLE "Offer" RENAME COLUMN "theme_temp" TO "theme";

ALTER TABLE "Template" DROP COLUMN "theme";
ALTER TABLE "Template" RENAME COLUMN "theme_temp" TO "theme";

-- Step 4: Drop the ENUM type
DROP TYPE "THEME";