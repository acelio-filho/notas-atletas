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
     ]
function retornaListaNotas(atletas){
  let resultados = [];
for (const element of atletas) {
  let notasValidas = element.notas.sort().slice(1,element.notas.length-1);//precisaria ser sort(comparaNumeros(a, b)) pra ser uma média real, senão as notas 10 ficam sempre em primeiro lugar na matriz
  let somaDasNotas = 0;
 let somaDasNotasValidas = notasValidas.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    somaDasNotas
  );
  let mediaValida = somaDasNotasValidas / notasValidas.length;
  console.log('Atleta: '+element.nome);
  console.log('Notas Obtidas:'+element.notas.sort().join(","));
  console.log('Média Válida: '+mediaValida);
  console.log('');
  //adiciona a média calculada à matriz resultados
  resultados.push({
      nome: element.nome,
      notas: element.notas.sort(),
      media: mediaValida,
    });
}
//retorna a matriz com a média adicionada
return(resultados);
}//function fim
//
retornaListaNotas(atletas);