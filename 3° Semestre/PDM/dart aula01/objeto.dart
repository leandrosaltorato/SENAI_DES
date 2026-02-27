class Animal{
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //metodos
    String TudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main() {
    //Instãncia
    Animal boi;
    //Objeto
    boi = new Animal();

    boi.id = 1;
    boi.nome = "Bandido";
    boi.especie = "Bovino";
    boi.raca = "Nelore";
    boi.peso = 499.99;

    print(boi.TudoJunto());
}