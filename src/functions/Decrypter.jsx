const Decrypter = (data) => {

    const stringDecrypted = {
        "enter" : "e",
        "imes" : "i",
        "ai" : "a",
        "ober" : "o",
        "ufat" : "u"  
    };

    for (let i = 0; i <= data.length; i++) {
        let str = data[i] 
        if(stringDecrypted[str]) {
            data[i] = stringDecrypted[str]
        }
    };
    let strSorted = data.join("");

    return strSorted;
};

export default Decrypter;