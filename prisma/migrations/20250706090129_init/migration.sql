-- CreateTable
CREATE TABLE "Category" (
    "UUID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "imageURL" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Product" (
    "UUID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "discount" REAL NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "deletedAt" DATETIME,
    "categoryUUID" TEXT NOT NULL,
    CONSTRAINT "Product_categoryUUID_fkey" FOREIGN KEY ("categoryUUID") REFERENCES "Category" ("UUID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "UUID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "User" (
    "UUID" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" REAL,
    "name" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "phone_number" TEXT,
    "total_purchases" REAL DEFAULT 0,
    "current_purchase" REAL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "deletedAt" DATETIME,
    "roleUUID" TEXT NOT NULL,
    CONSTRAINT "User_roleUUID_fkey" FOREIGN KEY ("roleUUID") REFERENCES "Role" ("UUID") ON DELETE RESTRICT ON UPDATE CASCADE
);
