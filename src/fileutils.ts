import {readFileSync, writeFileSync, existsSync} from 'fs'

export const save = (fileName : string, str : string) => {
    var data = ''
    if (existsSync(fileName)) {
        data = `${data}${readFileSync(fileName)}\n`
    }
    data = `${data}${str}`
    writeFileSync(fileName, Buffer.from(data))
    console.log(`saved to ${fileName}`)
}

