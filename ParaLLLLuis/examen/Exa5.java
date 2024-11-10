package examen;

import java.util.Scanner;

/*
 * Create a program that displays a menu with 4 options: 
 * 1.- Exit
 * 2.- Enter data
 * 3.- Statistics
 * 4.- Reverse copy
 */

public class Exa5 {
	public static void main(String[] args) {
		
		Scanner keyboard = new Scanner(System.in);
		
		//Variables
		final int SIZE = 8;
		int array[] = new int[SIZE];
		int reverseArray[] = new int[SIZE];
		int reverse = array.length;
		int option;
		int number;
		char exit = 'n';
		
		//Display the menu
		do {
			System.out.println("Choose an option.");
			System.out.println("Write 1 to exit. Write 2 to enter data. Write 3 to show stadistics. Write 4 to show the stadistics in reverse order.");
			option = keyboard.nextInt();
			switch(option) {
			
			// 1.- Exit
			case 1:
				System.out.println("You choose option 1: Exit.");
				do {
					System.out.println("Are you sure to want to exit? Choose yes to exit or not to continue.");
					exit = keyboard.next().charAt(0);
					keyboard.nextLine();
				}while(exit != 'y' && exit != 'Y' && exit != 'n' && exit != 'N'); //Repeat in case the user don´t choose yes or not
				break;	
			
			// 2.- Enter data
			case 2: 
				System.out.println("You choose option 2: Enter data.");
				System.out.println("Tell me a serie of 8 numbers");
				for (int i = 0; i < array.length; i++) {
					number = keyboard.nextInt();
					array[i] = number; //Create an array with the numbers of the user
				}
				break;
				
			// 3.- Statistics
			case 3:
				System.out.println("You choose option 3: Statistics.");
				
				int min = array[0]; //Inizialice the variable with the first value of the array
					for (int i = 0; i < array.length; i++) {
						//Use the variable to compare with all the values of the array
						if(min < array[i]) {
						}else {
							min = array[i];
						}
					}
					//When the value of min its equal to the value of the array, display it and break the loop to show only the first position
					for (int i = 0; i < array.length; i++) {
						if(min == array[i]) {
							System.out.println("The position of minimum value is: "+i);
							break;
						}
					}
					//The same than the minimum
					int max = array[0];
					for (int i = 0; i < array.length; i++) {
						if(max > array[i]) {
						}else {
							max = array[i];
						}
					}
					for (int i = 0; i < array.length; i++) {
						if(max == array[i]) {
							System.out.println("The position of maximum value is: "+i);
							break;
						}
					}
				break;
				
			// 4.- Reverse copy
			case 4:
				//Use the array before to copy the reverse array
				System.out.println("You choose option 4: Reverse copy.");
				for (int i = 0; i < array.length; i++) {
					reverseArray[i] = array[reverse - 1];
					reverse--; //Use that variable to decrementing the position
				}
				//Display the original array
				System.out.print("Original array: ");
				for (int i = 0; i < array.length; i++) {
					System.out.print(array[i]+"  ");
				}
				//Display the reverse array
				System.out.print("\nReverse array: ");
				for (int i = 0; i < reverseArray.length; i++) {
					System.out.print(reverseArray[i]+"  ");
				}
				System.out.println("");
				break;
			default:
				System.out.println("Please, choose a validate option.");
				break;
			}
		}while(exit != 'y' && exit != 'Y');
		System.out.println("Have a good day!");
	}
}
