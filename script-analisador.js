//Array de Regras
var especiais = [",",";",".",":",":=","(",")"];
var reservadas =["AND","BEGIN","CALL","CASE","CONST","DO","ELSE","END","FOR","IF","INTEGER","NOT","OF","OR","AND","PROCEDURE","PROGRAM",
"READLN","REPEAT","THEN","TO","UNTIL","VAR","WHILE","WRITELN"];
var numberPattern = /\d+/g;

// Inicializacao
function init(){
var input = document.getElementById("entrada").value;
this.analisador(input);
}

var analisador = function(input){

	let words = input.split(" ");

	for(let i = 0; i < words.length; i++){
	let word = words[i];
	console.log("WORD", word);	
	if(this.arrayContains(word,especiais)){
	 console.log("ESPECIAL");
	}
	if(this.arrayContains(word,reservadas)){
	 console.log("PALAVRA RESERVADA");
	}
	if(word.match(numberPattern)){
	console.log("NUMERO");	
	}

}

}

function arrayContains(string, arrhay)
{
    return (arrhay.indexOf(string) > -1);
}