void main(){
    String texto = "Alo Mundo!";
    int numero = 99999999999999999;
    double n = 0.333333333333333333333333333;
    bool ativo = true;
    var coisa = 10; //não tipada
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real = "+n.toString());//concatenação: sempre tudo em string
    print(ativo? "oi":"Tchau");//If ternario
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}
