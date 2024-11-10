package examen;

import java.util.Scanner;

/*
 * Design a java program to calculate the speed (in m/s) of the runners of the San Silvestre race
 * this coming Christmas. The race has a length of 5 km.
 */

public class Exa3 {
	public static void main(String[] args) {
		Scanner keyboard = new Scanner(System.in);
		
		//Variables
		final int RACE = 5000;
		int minutes; //Minutes of the runners
		int seconds; //Seconds of the runners
		float totalSeconds; //Total of seconds
		int countRunner = 0;
		float speed;
		float totalSpeed = 0; //Sum of all speeds
		float averageSpeed;
		
		do {
			do {
				System.out.println("Tell me the time in minutes of the runner number "+(countRunner+1));
				minutes = keyboard.nextInt();
			}while(minutes < 0); //Repeat in case the minutes are negative
			
			do {
				System.out.println("Now the seconds");
				seconds = keyboard.nextInt();
			}while(seconds < 0 || seconds > 59); //Repeat if seconds not are really seconds
			
			totalSeconds = (minutes * 60) + seconds; //Calculate the total of seconds
	
			speed = RACE / totalSeconds; //Calculate the speed
			
			if(minutes == 0 && seconds == 0) {
				break;
			}
			
			//Display the speed of the runners
			System.out.println("The speed of the runner number "+(countRunner+1)+" its equal to "+speed+"m/s.");
			
			totalSpeed += speed; //Counter of speed
			countRunner++; //Counter of runners
			
		}while(minutes != 0 && seconds != 0);
		
		//Calculate the average speed
		averageSpeed = totalSpeed / countRunner;
		
		//Display the average speed
		System.out.println("The average is: "+averageSpeed+"m/s");
	}
}
