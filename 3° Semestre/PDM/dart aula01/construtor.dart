class Animal {
  //Atributos
  int id = 0;
  String nome = '';
  String especie = '';
  String raca = '';
  double peso = 0.0;
  //metodos
  Animal(this.id, this.nome, this.especie, this.raca, this.peso);
  String TudoJunto() {
    return "$id, $nome, $especie, $raca, $peso";
  }
}

void main() {
  Animal boi = new Animal(1, "Bandido", "Bovino", "Nelore", 499.0);
  Animal gata = new Animal(2, "Luna", "Felino", "Persa", 1800.00);
  Animal galinha = new Animal(3, "Carijó", "Ave", "Índio Gigante", 150.00);
  Animal cachorro = new Animal(4, "Rex", "Canino", "Pastor Alemão", 2500.00);
  Animal passaro = new Animal(5, "Piu", "Ave", "Calopsita", 350.00);
  Animal cavalo = new Animal(6, "Relâmpago", "Equino", "Mangalarga", 15000.00);
  Animal tigre = new Animal(7, "Rajah", "Felino", "Tigre-de-Bengala", 75000.00);
  Animal macaco = new Animal(8, "Kiko", "Primata", "Macaco-Prego", 4000.00);
  Animal borboleta = new Animal(9, "Safira", "Inseto", "Borboleta-Azul", 50.00);
  Animal gato = new Animal(10, "Simba", "Felino", "Siamês", 2000.00);

  print(boi.TudoJunto());
}
