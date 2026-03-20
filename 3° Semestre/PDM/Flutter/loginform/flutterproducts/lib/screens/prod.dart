import 'package:flutter/material.dart';

class Produtos extends StatefulWidget {
  const Produtos({super.key});

  @override
  State<Produtos> createState() => _ProdutosState();
}

String nome = "";
double preco = 0.0;
int quant = 0;
double subtotal = 0.0;

void calcular() {
  subtotal = quant * preco;
  mostrarResult();
}

void mostrarResult() {
  if (mounted) {
    showDialog(
      context: context,
      builder: (BuildContext context) => AlertDialog(
        title: Text(nome),
        content: Text("O subtotal é ${subtotal.toStringAsFixed(2)}"),
      ),
    );
  }
}

class _ProdutosState extends State<Produtos> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/loja.jpg"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.5),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Column(
          spacing: 40.0,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(child: Text("Produtos")),
            TextField(decoration: InputDecoration(labelText: "Nome")),
            TextField(decoration: InputDecoration(labelText: "Preço")),
            TextField(decoration: InputDecoration(labelText: "Quantidade")),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                  onPressed: () => calcular(),
                  child: Text("Calcular"),
                ),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text("Sair"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
