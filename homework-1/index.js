import { program } from 'commander'
import moment from 'moment'

const defaultGreeting = 'Hello'
const defaultName = 'guest'
const defaultLanguage = 'english'

const availableLanguages = {
    english: 'Hello',
    italian: 'Ciao',
    spanish: 'Hola',
    french: 'Bonjour',
    russian: 'Привет',
    deutsch: 'Hallo'
}

program
    .option('-n, --name <name>', 'Greeting name', defaultName)
    .option('-l, --level <level>', 'Level of verbosity', '1')
    .option('-g, --greeting <greeting>', 'Text of greeting', defaultGreeting)
    .option('--language <language>', 'Language of greeting', defaultLanguage)

program.parse()

const options = program.opts()

const name = options.name
const greeting = options.greeting === 'Hello' ? availableLanguages[options.language] : options.greeting
const lvl = +options.level

let resultMessage = `${greeting}, ${name}!`

if (lvl === 2) {
    const date = moment().format('YYYY-MM-DD HH:mm:ss')
    resultMessage += ` (Date and time: ${date})`
}

console.log(resultMessage)
