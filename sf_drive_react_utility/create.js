const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
    .command(['createFolder <foldername>', 'cf'], 'Create a new folder and write a passed content to it', {}, (argv => {
        //const folderName = argv.foldername;
        const folderPath = path.resolve(argv.foldername)
        fs.mkdir(folderPath, { recursive: true })
            .then(()=> console.log('Your folder has been saved succesfully'))
            .catch(e => console.log('An error has occured', e));
    }))


    .command(['create <filename> [content]', 'c'], 'Create a new file and write a passed content to it', {
        functional: {
            alias: 'f', 
            dafault: "function",
            string: "true"
        }
    }, (argv => {
        
        const filepath = path.resolve(argv.filename);
        const function_type = `
        import React from 'react';
        import "../styles/${argv.content}.css";

        export ${argv.functional} ${argv.content}(props){
          return (
            <div>Write your codes here..</div>
          );
        }
        
        export default ${argv.content};`;
        const class_type =`import React from 'react';
        import "../styles/${argv.content}.css";

        ${argv.functional} ${argv.content} extends React.Component {
            render() {
              return <div>Write your codes here..</div>
            }
          }
         
          export default ${argv.content}; `;
        const tip = () => {
            if(argv.functional === "function") {
                return function_type;
            } else if(argv.functional === "class") {
                return class_type;
            }
        }
        
        const defaultContent = 'Default content';
        
        fs.writeFile(filepath, tip() || defaultContent)
            .then(()=> console.log('Your data has been saved succesfully'))
            .catch(e => console.log('An error has occured', e));
    }))
    .argv;