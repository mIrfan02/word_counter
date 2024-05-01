#!/usr/bin/env node
import inquirer from 'inquirer';

async function countCharactersAndWords() {
    const userInput = await inquirer.prompt({
        name: 'paragraph',
        message: 'Enter an English paragraph:',
        type: 'input'
    });

    // Extract paragraph from user input
    const paragraph = userInput.paragraph;

    // Remove whitespaces from the paragraph
    const paragraphWithoutWhitespaces = paragraph.replace(/\s/g, '');

    // Count characters
    const characterCount = paragraphWithoutWhitespaces.length;

    // Count words (assuming words are separated by spaces)
    const wordCount = paragraph.split(/\s+/).filter((word:string) => word !== '').length;

    // Output results
    console.log(`Character count (excluding whitespaces): ${characterCount}`);
    console.log(`Word count (excluding whitespaces): ${wordCount}`);
}

countCharactersAndWords();
