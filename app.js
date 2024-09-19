// app.js

import { fizzBuzz } from './fizzbuzz.js';
import { findNextPrime } from './primeUtils.js';
import { parseCSV } from './csvParser.js';

// Run FizzBuzz
fizzBuzz();

// Find the next prime number after 9
let n = 9;
findNextPrime(n);

// Parse CSV
let csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
parseCSV(csvString);
