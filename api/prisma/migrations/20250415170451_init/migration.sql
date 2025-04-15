-- CreateTable
CREATE TABLE `Automovel` (
    `placa` VARCHAR(7) NOT NULL,
    `modelo` VARCHAR(100) NOT NULL,
    `cor` VARCHAR(50) NOT NULL,
    `ano` INTEGER NOT NULL,
    `marca` VARCHAR(50) NOT NULL,
    `telefone` VARCHAR(15) NOT NULL,
    `proprietario` VARCHAR(100) NOT NULL,
    `tipo` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`placa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estadia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(7) NOT NULL,
    `entrada` DATETIME(6) NOT NULL,
    `saida` DATETIME(6) NOT NULL,
    `valorHora` DOUBLE NOT NULL,
    `valorTotal` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Estadia` ADD CONSTRAINT `Estadia_placa_fkey` FOREIGN KEY (`placa`) REFERENCES `Automovel`(`placa`) ON DELETE RESTRICT ON UPDATE CASCADE;
