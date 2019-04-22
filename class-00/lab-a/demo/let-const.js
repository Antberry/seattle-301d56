var global = 'I am a global variable';

function scopeMaker(){
  var local = 'I am a global variable';
  console.log(global, 'logged from the inside scopeMaker().');
  console.log(local, 'logged from the inside scopeMaker().');
}
scopeMaker();
