import java.util.Scanner;

public class Desafio {
    public static void main(String[] args) {

//        CREANDO UNA APLICACIÓN BANCARIA

//        Nombre del cliente
//        Tipo de cuenta: corriente
//        Saldo disponible: 1599.99

//        *************************************************
//        ** Escriba el número de la función deseada **
//        1 - Consultar saldo
//        2 - Retirar
//        3 - Depositar
//        9 - Salir
//        --------------------------------------------------

//      Datos del cliente
        String nombre = "Tony Stark";
        String tipoDeCuenta = "Corriente";
        double saldo = 1599.99;
        int opcion = 0;

//      Imprimiendo los datos del cliente
        System.out.println("Bienvenido a tu aplicación bancaria");
        System.out.println("*****************************************");
        System.out.println("\nNombre del cliente: " + nombre);
        System.out.println("Tipo de cuenta: " + tipoDeCuenta);
        System.out.println("Saldo disponible: " + saldo);
        System.out.println("\n*****************************************");

        //Fin de la primera parte Iniciando los valores de la cuenta

        String menu = """
                ** Escriba el número de la opción deseada **
                1 - Consultar saldo
                2 - Retirar
                3 - Depositar
                9 - Salir
                """;
        Scanner teclado = new Scanner(System.in);

        while (opcion != 9) {
            System.out.println(menu);// imprimiendo el menú de opciones
            opcion = teclado.nextInt(); //recibiendo la opciòn por teclado

        //Fin de la segunda parte montando el menú de opciones


            switch (opcion) {
                case 1: //Consultando el saldo actual
                    System.out.println("Su saldo actual es: $" + saldo);
                    break;
                case 2: //Retirando
                    System.out.println("Cuál es el valor que deseas retirar?");
                    double valorARetirar = teclado.nextDouble();
                    if (valorARetirar > saldo) {
                        System.out.println("Saldo insuficiente");
                    } else {
                        saldo = saldo - valorARetirar;
                        System.out.println("Saldo restante: $" + saldo);
                    }
                    break;
                case 3: //Depositando
                    System.out.println("Cuál es el valor que vas a depositar?");
                    double valorADepositar = teclado.nextDouble();
                    saldo += valorADepositar;
                    System.out.println("Su saldo actual ahora es: $" + saldo);
                    break;
                case 9: //Salir
                    System.out.println("Finalizando el programa. Muchas gracias por usar nuestros servicios.");
                    break;
                default:
                    System.out.println("Opción inválida");
                    break;
            }
        }

        //Fin de la tercera parte implementando los cálculos
    }
}
