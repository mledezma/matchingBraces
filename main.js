var string = '{[(())]}';

function matchBraces(str) {
    strArr = str.split('');
    let leftBraces = ['[','{','('];
    let rightBraces = [']','}',')'];
    let newBrace = [];

    for(let i = 0; i < strArr.length; i++) {
        if (leftBraces.indexOf(strArr[i]) !== -1) {
            newBrace.push(strArr[i]);
        } else {
            let currentBrace = newBrace[newBrace.length-1];
            if(leftBraces.indexOf(currentBrace) === rightBraces.indexOf(strArr[i])) {
                newBrace.pop();
                if(newBrace.length === 0) {
                    console.log('True');
                }
            } else {
                console.log('False');
                return;
            }
        }
    }
}

matchBraces(string);