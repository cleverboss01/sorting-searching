// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand. 
// Instructions
// Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.


// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n
function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}

// Driver code
	let arr = [12, 11, 13, 5, 6 ];
	let n = arr.length;

	insertionSort(arr, n);
	printArray(arr, n);

