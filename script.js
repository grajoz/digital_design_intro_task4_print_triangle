
function printTriangle() {

    let width = 5;
    let line = "";

    function buildLine (nuberline) {
        let spaces = "";
        for (let y = 0; y <(width-nuberline-1);y++) {
            spaces = spaces + " ";
        };
    
        for (let j = 0; j<=nuberline; j++) {
            line = line + "# ";
        };
        line = spaces + line;
    }

    for (let i = 0; i  < width; i ++) {
        buildLine (i)
        console.log(line);
        line = "";
    };
};

printTriangle();