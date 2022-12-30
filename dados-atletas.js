class Atleta{
    constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    //this.imc = this.peso/(this.altura * this.altura);
    }
    
    
    //metodos
    calculaCategoria(){ //faz a classificação a partir da idade
    let categoria="";
    if(this.idade >=16 && this.idade <=30){categoria = "Adulto";
}else if(this.idade === 12 || this.idade === 13){categoria = "Juvenil";
}else if(this.idade === 14 || this.idade === 15){categoria = "Intermediário";
}else if(this.idade >=9 && this.idade <=11){ categoria = "Infantil";
}else{categoria="Sem categoria"}
return categoria;
    }
    calculaIMC() {// gera o IMC do atleta:    
  return this.peso / (this.altura * this.altura);    
    }
    calculaMediaValida(){ //para calcular a média válida do atleta.
     let notasValidas = this.notas.sort().slice(1,this.notas.length-1);
     let somaDasNotas = 0;
     let somaDasNotasValidas = notasValidas.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      somaDasNotas
      );
     let mediaValida = somaDasNotasValidas / notasValidas.length;
     return mediaValida ;   
    }
    obtemNomeAtleta(){ //retorna o nome do atleta
       console.log('Atleta: '+this.nome);
    }
    obtemIdadeAtleta(){ //retorna a idade do atleta
       console.log('Idade: '+this.idade);
    }
    obtemPesoAtleta(){ //retorna o peso do atleta
       console.log('Peso: '+this.peso);
    }
    obtemAlturaAtleta(){ // rewtorna a altura do atleta
       console.log('Altura: '+this.altura); 
    }
    obtemNotasAtleta(){ //retorna as notas do atleta
       console.log('Notas:'+this.notas);
    }
    obtemCategoria() { //retorna a categoria do atleta
       console.log('Categoria: '+this.calculaCategoria());

    }
    obtemIMC() { //retorna o IMC do atleta
       console.log('IMC: '+this.calculaIMC());
    }
    obtemMediaValida() { //retorna a média válida do atleta
     console.log('Média Válida: '+this.calculaMediaValida());
    }
          
    }
    
    // Declara o atleta
    const atleta = new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);
        //saída
atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta()
atleta.obtemCategoria();       
atleta.obtemIMC();
atleta.obtemMediaValida();