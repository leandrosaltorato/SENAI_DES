/*
  Warnings:

  - You are about to drop the column `clientesId` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `carrosId` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `clientes` DROP FOREIGN KEY `Clientes_clientesId_fkey`;

-- DropIndex
DROP INDEX `Clientes_clientesId_fkey` ON `clientes`;

-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `clientesId`,
    ADD COLUMN `carrosId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Clientes` ADD CONSTRAINT `Clientes_carrosId_fkey` FOREIGN KEY (`carrosId`) REFERENCES `Carros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
