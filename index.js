const { default: inquirer } = require("inquirer");
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")


const main = async () => {
    let opt;

    do {

        opt = await inquirerMenu();
        console.log({ opt });
        
        await pausa();

    } while ( opt !== 0 )

}

main();