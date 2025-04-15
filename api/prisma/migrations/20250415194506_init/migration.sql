/*
  Warnings:

  - You are about to alter the column `saida` on the `estadia` table. The data in that column could be lost. The data in that column will be cast from `DateTime(6)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `estadia` MODIFY `entrada` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    MODIFY `saida` DATETIME(3) NULL,
    MODIFY `valorTotal` DOUBLE NULL;
