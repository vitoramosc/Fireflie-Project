var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(usuario.fkPersonagem) as voto, personagem.nome as personagem from usuario join personagem on personagem.idPersonagem = usuario.fkPersonagem group by usuario.fkPersonagem;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(usuario.fkPersonagem) as voto, personagem.nome as personagem from usuario join personagem on personagem.idPersonagem = usuario.fkPersonagem group by usuario.fkPersonagem`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(usuario.fkPersonagem) as voto, personagem.nome as personagem from usuario join personagem on personagem.idPersonagem = usuario.fkPersonagem group by usuario.fkPersonagem;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(usuario.fkPersonagem) as voto, personagem.nome as personagem from usuario join personagem on personagem.idPersonagem = usuario.fkPersonagem group by usuario.fkPersonagem;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
