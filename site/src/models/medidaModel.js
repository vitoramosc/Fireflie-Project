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


function inserirPontuacaoQuiz(acertos, fk_usuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `insert into quiz (acertos, fk_usuario) values ();`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `insert into quiz (acertos, fk_usuario) values (${acertos}, ${fk_usuario});`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacaoQuiz() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `insert into quiz (acertos, fk_usuario) values ();`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select quiz.acertos as acertos, usuario.nome as nome from quiz join usuario on id = quiz.fk_usuario;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function checarQuiz(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `insert into quiz (acertos, fk_usuario) values ();`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(fk_usuario) as contagem, idQuiz from quiz join usuario on id = fk_usuario where id = ${idUsuario} group by idQuiz;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarQuiz(acertos, idQuiz) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `insert into quiz (acertos, fk_usuario) values ();`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `update quiz set acertos = ${acertos} where idQuiz = ${idQuiz};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    inserirPontuacaoQuiz,
    buscarPontuacaoQuiz,
    checarQuiz,
    atualizarQuiz
}
