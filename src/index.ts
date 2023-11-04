import { about, help, mes, readSetting, updata } from "./deps.ts";

const commands: { [key: string]: (lang: string) => void } = {
  about: about,
  updata: updata,
  help: help,
};
const setting = await readSetting();
console.log(setting);
const lang = setting.lang;
console.log(mes[lang].exitMessage);
while (true) {
  const commandName = prompt(">");
  if (commandName === "exit") {
    break;
  }
  if (commandName === null) {
    console.log(mes[lang].Nocommandentered);
    continue;
  }
  // const inputArray = input.split(" ");
  // const commandName: string = inputArray[0];
  // const commandArgs = inputArray.slice(1);
  const command = commands[commandName];
  if (command === undefined) {
    console.log(mes[lang].commandNotFound);
    continue;
  } else {
    command(lang);
  }
}
// // console.log(confirm("message"))Yes or No
// console.log(format(1000000))// バイトをいい感じにするやつ
// console.log(Deno.memoryUsage())
// about()
