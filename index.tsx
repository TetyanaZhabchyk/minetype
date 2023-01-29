const N: number = parseInt(readline()); // Number of elements which make up the association table.
const Q: number = parseInt(readline()); // Number Q of file names to be analyzed.

let coder = {};

for (let i = 0; i < N; i++) {
  var inputs: string[] = readline().split(" ");
  const EXT: string = inputs[0]; // file extension
  const MT: string = inputs[1]; // MIME type.

  coder[EXT] = MT;
}
console.error(coder);

for (let i = 0; i < Q; i++) {
  const FNAME: string = readline();
  console.error(FNAME);
  const EXT_FNAME_TAB: string[] = FNAME.split(".");
  const EXT_FNAME_TAB_LENGTH = EXT_FNAME_TAB.length;
  if (EXT_FNAME_TAB_LENGTH == 1) {
    console.log("UNKNOWN");
  } else {
    const EXT_FNAME_TAB_LAST_INDEX = EXT_FNAME_TAB_LENGTH - 1;
    const EXT_FNAME: string = EXT_FNAME_TAB[EXT_FNAME_TAB_LAST_INDEX];
    const MT_FNAME = coder[EXT_FNAME];
    if (MT_FNAME) console.log(MT_FNAME);
    else {
      console.log("UNKNOWN");
    }
  }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
