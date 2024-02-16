process.stdin.setEncoding('ascii');
var stdin = "";
var stdin_arr;
var prompt = () => stdin_arr.pop();
process.stdin.on('data', (data) => {stdin += data});
process.stdin.on('end', () => {stdin_arr = stdin.split("\n");stdin_arr.reverse();main()});
process.stdin.resume();

function main() {
   //Enter code here...
}