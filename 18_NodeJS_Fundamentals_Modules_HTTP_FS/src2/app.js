//Synchronous file reading in Node.js using the fs module.
//age data read hobe then baki code execute hobe
const fs = require('fs');
const data = fs.readFileSync('src2/file.txt', 'utf-8');
console.log('File Content:', data);
console.log('This will be logged after reading the file.');


//Asynchronous file reading in Node.js using the fs module.
//kono dependency na thakle ba baki part alada vabe execute hote parbe tokhon async
fs.readFile('src2/file.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err; 
        // console.error('Error reading file:', err);
        return;
    }
    console.log('File Content:', data);
});
console.log('This will be logged before reading the file.');
//output will be 'This will be logged before reading the file.' followed by the content of the file once it is read, demonstrating the asynchronous nature of the operation.


//_____________________________________________________________
// write file sync in Node.js using the fs module.
fs.writeFileSync('src2/newfile.txt', 'This is the content to be written to the file.')


// write file Async in Node.js using the fs module.
const content = 'This is the content to be written to the file.';
fs.writeFile('src2/newfile.txt', content, (err) => {
    if (err) {
        throw err;
        // console.error('Error writing file:', err);
        return;
    }
    console.log('File has been written successfully.');
});
//output will be 'File has been written successfully.' if the writing is successful, or an error message if there is an issue (e.g., if there are permission issues or if the directory does not exist).


//_____________________________________________________________
//update file sync in Node.js using the fs module.
fs.appendFileSync('src2/newfile.txt', '\nThis is additional content being appended to the file.');

//update file Async in Node.js using the fs module.
const additionalContent = '\nThis is additional content being appended to the file.';
fs.appendFile('src2/newfile.txt', additionalContent, (err) => {
    if (err) {
        throw err;
        // console.error('Error appending to file:', err);
        return;
    }
    console.log('Content has been appended successfully.');
});


//_____________________________________________________________
//delete file sync in Node.js using the fs module.
fs.unlinkSync('src2/newfile.txt');

//delete file Async in Node.js using the fs module. 
fs.unlink('src2/newfile.txt', (err) => {
    if (err) {
        throw err;
        // console.error('Error deleting file:', err);
        return;
    }
    console.log('File has been deleted successfully.');
});
//output will be 'File has been deleted successfully.' if the deletion is successful, or an error message if there is an issue (e.g., if the file does not exist or if there are permission issues).


//_____________________________________________________________
//check file exist sync in Node.js using the fs module.
const filePath = 'src2/newfile.txt';

if (fs.existsSync(filePath)) {
    console.log('File exists.');
} else {
    console.log('File does not exist.');
}


//check file exist Async in Node.js using the fs module.
const filePath = 'src2/newfile.txt';
//fs.constants.F_OK → File existence check
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.log('File does not exist.');
    } else {
        console.log('File exists.');
    }
});
//output will be 'File does not exist.' if the file is not present, or 'File exists.' if it is present. Note that fs.access checks for the existence of the file and its accessibility based on the specified mode (in this case, F_OK for existence).


//_____________________________________________________________
// Rename file sync in Node.js using the fs module.
fs.renameSync('src2/newfile.txt', 'src2/renamedfile.txt');


// Rename file Async in Node.js using the fs module.
fs.rename('src2/newfile.txt', 'src2/renamedfile.txt', (err) => {
    if (err) {
        throw err;
        // console.error('Error renaming file:', err);
        return;
    }
    console.log('File has been renamed successfully.');
});
// output will be 'File has been renamed successfully.' if the renaming is successful, or an error message if there is an issue (e.g., if the original file does not exist or if there are permission issues).

//_____________________________________________________________
//File Path Checking in Node.js using the path module.
const path = require('path');
const filePath = path.join(__dirname, 'src2', 'file.txt');
console.log('File Path:', filePath);
//output will be the absolute path to the file.txt based on the current directory of the script.


//_____________________________________________________________
//File Extension Checking in Node.js using the path module.
const ext = path.extname(filePath);
console.log('File Extension:', ext);
//output will be .txt for the file.txt


//_____________________________________________________________
// File resolve in Node.js using the path module.
const resolvedPath = path.resolve('src2', 'file.txt');
console.log('Resolved Path:', resolvedPath);
//output will be the absolute path to the file.txt based on the current working directory.