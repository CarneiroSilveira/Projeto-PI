import '../model'

// Relacionamentos entre as tabelas
Usuario.hasMany(Pergunta, { foreignKey: 'id_usuario' });
Pergunta.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(RespostaQuestoes, { foreignKey: 'id_usuario' });
RespostaQuestoes.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Professor.hasMany(Aula, { foreignKey: 'id_professor' });
Aula.belongsTo(Professor, { foreignKey: 'id_professor' });

Professor.hasMany(Questoes, { foreignKey: 'id_professor' });
Questoes.belongsTo(Professor, { foreignKey: 'id_professor' });

Materia.hasMany(Aula, { foreignKey: 'id_materia' });
Aula.belongsTo(Materia, { foreignKey: 'id_materia' });

Materia.hasMany(Questoes, { foreignKey: 'id_materia' });
Questoes.belongsTo(Materia, { foreignKey: 'id_materia' });

Pergunta.hasMany(RespostaProfessor, { foreignKey: 'id_pergunta' });
RespostaProfessor.belongsTo(Pergunta, { foreignKey: 'id_pergunta' });

Pergunta.hasMany(Denuncia, { foreignKey: 'id_pergunta' });
Denuncia.belongsTo(Pergunta, { foreignKey: 'id_pergunta' });

RespostaProfessor.hasMany(Denuncia, { foreignKey: 'id_resposta' });
Denuncia.belongsTo(RespostaProfessor, { foreignKey: 'id_resposta' });

Moderador.hasMany(Denuncia, { foreignKey: 'id_moderador' });
Denuncia.belongsTo(Moderador, { foreignKey: 'id_moderador' });

Disciplina.belongsTo(Professor, { foreignKey: 'id_professor' });
Disciplina.belongsTo(Materia, { foreignKey: 'id_materia' });

RespostaQuestoes.belongsTo(Questoes, { foreignKey: 'id_questoes' });
Pergunta.belongsTo(Questoes, { foreignKey: 'id_questoes' });

Pergunta.belongsTo(Aula, { foreignKey: 'id_aula' });