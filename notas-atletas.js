let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
     ];
function retornaListaNotas(dados){
  let atletas=dados
for (const element of atletas) {
  let notasValidas = element.notas.sort().slice(1,4);//precisa ser sort(comparaNumeros) pra ser uma média real, senão as notas 10 ficam sempre em primeiro lugar na matriz
  let somaDasNotas = 0;
 let somaDasNotasValidas = notasValidas.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    somaDasNotas
  );
  console.log('Atleta: '+element.nome);
  console.log('Notas Obtidas:'+element.notas.sort().join(","));
  console.log('Média Válida: '+somaDasNotasValidas/notasValidas.length);
  console.log();
  element.media=somaDasNotasValidas/notasValidas.length; //adiciona a média à matriz let atletas
}
return atletas.forEach(function(atleta){ //for Each na nova matriz, que contém a média
return `Atleta: ${atleta.nome}
Notas obtidas: ${atleta.notas.sort()}
Média Válida: ${atleta.media}
`;
});

}
retornaListaNotas(atletas);
