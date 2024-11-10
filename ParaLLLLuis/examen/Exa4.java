package examen;

import java.util.Scanner;

/*
 * Write a java program that displays on screen the coordinates of a table whose dimensions N x N,
 * where N is an integer entered by the user.
 */

public class Exa4 {
	public static void main(String[] args) {
		
		Scanner keyboard = new Scanner(System.in);
		
		//Variables
		float countCoordY = 0, countCoordX = 0.0f; //Coordinates X and Y for rows and columns
		int n;
		
		//We need the variable n its bigger than 0.
		do {
			System.out.println("Tell me the dimensions of the table");
		n = keyboard.nextInt();
		}while(n < 1);
		
		float table[][] = new float[n][n];//Creation of array with n dimensions
		
		for (int i = 0; i < table.length; i++) {
			for (int j = 0; j < table.length; j++) {
				table[i][j] = (countCoordY + countCoordX);
				countCoordX = countCoordX + 0.1f;
			}
			countCoordY++;
			countCoordX = 0.0f; //Reset of coordinate X
		}
		
		//Display the table
		for (int i = 0; i < table.length; i++) {
			for (int j = 0; j < table.length; j++) {
				System.out.print(table[i][j]+"  ");
			}
			System.out.println("");
		}
	}
}
