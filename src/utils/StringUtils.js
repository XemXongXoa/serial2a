module.exports = {
    regexIdFingerPrint(str){
        try{
            const regex = '[0-9]{1,9999}';
            return str.match(regex)[0]
        }
        catch(e){
            return "0";
        }
    }
}