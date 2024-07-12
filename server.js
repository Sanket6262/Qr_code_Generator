// index.js

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const QRCode = require('qrcode');

// Function to prompt user input
        const promptUser = async ()=>{
       const answers= await inquirer.prompt([
            {
                type:'input',
                name: 'data',
                message: 'Enter data to generate QR Code:',
                validate: (input)=> input ? true :'Data cannot be empty!',
            },
       ]);
                    return answers.data;
    };

        // Generate QR Code
        const generateQRcode = async (data) => {
        try{
            const qrCodeImagePath = path.join(__dirname, `${data}.png`);
            await QRCode.toFile(qrCodeImagePath,data);
            console.log(`QR Code generated and saved as ${qrCodeImagePath}`);
        } catch (error) {
            console.error('Error generating QR code:',error);
        }
    };

        //main function
        const main = async ()=>{
             const data = await promptUser();
             await generateQRcode(data);
        }
        
// Start the application
main();