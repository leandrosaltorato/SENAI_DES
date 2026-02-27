/*
  Warnings:

  - You are about to drop the column `carrosId` on the `clientes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `clientes` DROP FOREIGN KEY `Clientes_carrosId_fkey`;

-- DropIndex
DROP INDEX `Clientes_carrosId_fkey` ON `clientes`;

-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `carrosId`,
    MODIFY `cpf` VARCHAR(191) NOT NULL;
