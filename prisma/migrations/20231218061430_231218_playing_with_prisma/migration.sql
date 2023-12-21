-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OTHER', 'FARMER', 'PROVIDER');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OTHER',
    "name" TEXT,
    "password" TEXT NOT NULL,
    "adm1" TEXT,
    "adm2" TEXT,
    "adm3" TEXT,
    "address" TEXT,
    "lon" DECIMAL(65,30),
    "lat" DECIMAL(65,30),
    "dob" INTEGER,
    "sex" "Sex",
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
