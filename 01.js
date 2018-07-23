class Hash{


    static md5(value){

        let crypto = require("crypto"); 
        var salt = 'd2g6IOP(U(&Â§)%UÂ§VUIPU(HN%V/Â§Â§URerjh0Ã¼rfqw4zoÃ¶qe54gÃŸ0Ã¤Q"LOU$3wer';
        var hashStr = value + salt;
        var md5Hash = crypto.createHash('md5').update(hashStr).digest('hex');
        var sha1 = crypto.createHash('sha1').update(md5Hash).digest('hex');
        
        return sha1;
    }

    static sha1(value){
        let crypto = require("crypto");
        var generator = crypto.createHash('sha1');
        generator.update( value )  
        return generator.digest('hex') 



    }


    static sha256(value){
        let crypto = require("crypto");
        var generator = crypto.createHash('sha256');
        generator.update( value )  
        return generator.digest('hex') 



    }

    static sha512(value){
        let crypto = require("crypto");
        var generator = crypto.createHash('sha512');
        generator.update( value )  
        return generator.digest('hex') 



    }



}
console.log(Hash.md5('secret'));
console.log(Hash.sha1('secret'));
console.log(Hash.sha256('secret'));
console.log(Hash.sha512("secret")); 