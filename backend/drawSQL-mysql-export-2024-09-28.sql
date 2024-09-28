CREATE TABLE `usuario`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `roles` ENUM(
        'Aluno',
        'Moderador',
        'Administrador',
        'Professor'
    ) NOT NULL DEFAULT 'Aluno',
    `genero` ENUM(
        'Masculino',
        'Feminino',
        'Nao-Binario',
        'Outro'
    ) NOT NULL DEFAULT 'Outro',
    `biografia` VARCHAR(1024) NULL,
    `data-nacimento` DATETIME NOT NULL,
    `nome` VARCHAR(32) NOT NULL,
    `sobrenome` VARCHAR(32) NOT NULL
);
CREATE TABLE `resposta-professor`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `corpo` TEXT NOT NULL,
    `id-usuario` INT UNSIGNED NOT NULL,
    `id-professor` INT UNSIGNED NOT NULL,
    `id-pergunta` INT UNSIGNED NOT NULL,
    `data-criacao` DATETIME NOT NULL,
    `data-atualizacao` DATETIME NULL
);
CREATE TABLE `questoes`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(255) NOT NULL,
    `descricao` TEXT NOT NULL,
    `imagem` VARCHAR(255) NULL,
    `id-professor` INT UNSIGNED NOT NULL,
    `id-materia` INT UNSIGNED NOT NULL,
    `a` VARCHAR(255) NULL,
    `b` VARCHAR(255) NULL,
    `c` VARCHAR(255) NULL,
    `d` VARCHAR(255) NULL,
    `e` VARCHAR(255) NULL,
    `tipo` ENUM(
        'multipla-escolha',
        'descritiva',
        'multipla-escolha',
        'anexo'
    ) NOT NULL
);
CREATE TABLE `moderador`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cpf` VARCHAR(32) NOT NULL
);
CREATE TABLE `denuncia`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id-pergunta` INT UNSIGNED NOT NULL,
    `id-moderador` INT UNSIGNED NULL,
    `descricao` VARCHAR(1024) NOT NULL,
    `violacoes` VARCHAR(1024) NOT NULL,
    `data-criacao` DATETIME NOT NULL,
    `id-resposta` INT UNSIGNED NULL
);
CREATE TABLE `professor`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cpf` VARCHAR(32) NOT NULL
);
CREATE TABLE `disciplina`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id-professor` INT UNSIGNED NOT NULL,
    `id-materia` INT UNSIGNED NOT NULL
);
CREATE TABLE `aula`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NULL,
    `descricao` TEXT NOT NULL,
    `data-criacao` DATETIME NOT NULL,
    `imagem` VARCHAR(255) NULL,
    `id-professor` INT UNSIGNED NOT NULL,
    `id-materia` INT UNSIGNED NOT NULL,
    `data-atualizacao` INT NULL
);
CREATE TABLE `materia`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nome` INT NOT NULL
);
CREATE TABLE `pergunta`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(255) NOT NULL,
    `corpo` TEXT NOT NULL,
    `id-usuario` INT UNSIGNED NOT NULL,
    `data-criacao` DATETIME NOT NULL,
    `data-atualizacao` DATETIME NULL,
    `validado` ENUM('em-andamento', 'validado') NULL,
    `id-questoes` INT UNSIGNED NOT NULL,
    `id-aula` INT UNSIGNED NOT NULL
);
CREATE TABLE `resposta-questoes`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id-usuario` INT UNSIGNED NOT NULL,
    `id-questoes` INT UNSIGNED NOT NULL,
    `resposta` CHAR(255) NULL,
    `anexo` VARCHAR(255) NULL
);
ALTER TABLE
    `resposta-professor` ADD CONSTRAINT `resposta_professor_id_usuario_foreign` FOREIGN KEY(`id-usuario`) REFERENCES `aula`(`id`);
ALTER TABLE
    `resposta-professor` ADD CONSTRAINT `resposta_professor_id_professor_foreign` FOREIGN KEY(`id-professor`) REFERENCES `professor`(`id`);
ALTER TABLE
    `resposta-questoes` ADD CONSTRAINT `resposta_questoes_id_usuario_foreign` FOREIGN KEY(`id-usuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `aula` ADD CONSTRAINT `aula_id_professor_foreign` FOREIGN KEY(`id-professor`) REFERENCES `professor`(`id`);
ALTER TABLE
    `resposta-professor` ADD CONSTRAINT `resposta_professor_id_pergunta_foreign` FOREIGN KEY(`id-pergunta`) REFERENCES `pergunta`(`id`);
ALTER TABLE
    `pergunta` ADD CONSTRAINT `pergunta_id_aula_foreign` FOREIGN KEY(`id-aula`) REFERENCES `aula`(`id`);
ALTER TABLE
    `questoes` ADD CONSTRAINT `questoes_id_professor_foreign` FOREIGN KEY(`id-professor`) REFERENCES `professor`(`id`);
ALTER TABLE
    `aula` ADD CONSTRAINT `aula_id_materia_foreign` FOREIGN KEY(`id-materia`) REFERENCES `materia`(`id`);
ALTER TABLE
    `pergunta` ADD CONSTRAINT `pergunta_id_usuario_foreign` FOREIGN KEY(`id-usuario`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `resposta-questoes` ADD CONSTRAINT `resposta_questoes_id_questoes_foreign` FOREIGN KEY(`id-questoes`) REFERENCES `questoes`(`id`);
ALTER TABLE
    `pergunta` ADD CONSTRAINT `pergunta_id_questoes_foreign` FOREIGN KEY(`id-questoes`) REFERENCES `questoes`(`id`);
ALTER TABLE
    `disciplina` ADD CONSTRAINT `disciplina_id_materia_foreign` FOREIGN KEY(`id-materia`) REFERENCES `materia`(`id`);
ALTER TABLE
    `disciplina` ADD CONSTRAINT `disciplina_id_professor_foreign` FOREIGN KEY(`id-professor`) REFERENCES `professor`(`id`);
ALTER TABLE
    `moderador` ADD CONSTRAINT `moderador_id_foreign` FOREIGN KEY(`id`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `questoes` ADD CONSTRAINT `questoes_id_materia_foreign` FOREIGN KEY(`id-materia`) REFERENCES `materia`(`id`);
ALTER TABLE
    `denuncia` ADD CONSTRAINT `denuncia_id_resposta_foreign` FOREIGN KEY(`id-resposta`) REFERENCES `resposta-professor`(`id`);
ALTER TABLE
    `denuncia` ADD CONSTRAINT `denuncia_id_moderador_foreign` FOREIGN KEY(`id-moderador`) REFERENCES `moderador`(`id`);
ALTER TABLE
    `denuncia` ADD CONSTRAINT `denuncia_id_pergunta_foreign` FOREIGN KEY(`id-pergunta`) REFERENCES `pergunta`(`id`);
ALTER TABLE
    `usuario` ADD CONSTRAINT `usuario_id_foreign` FOREIGN KEY(`id`) REFERENCES `professor`(`id`);