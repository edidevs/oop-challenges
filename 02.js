class Cipher{

    static setPwd(pwd){

        this.pwd = pwd; 
    }

    static setValue(crypted){

        this.crypted = crypted; 
    }

    static encrypt(value, pwd){
        
        Cipher.setPwd(pwd);
        let crypto = require("crypto");
        let cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
        let crypted = cipher.update(value,'utf8','hex')
        crypted += cipher.final('hex');

        Cipher.setValue(crypted);

        return crypted; 
        



    }

    static decrypt(value, password){

        if(this.pwd === password){
            let crypto = require("crypto"); 

            let decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
            let dec = decipher.update(value,'hex','utf8')
            dec += decipher.final('utf8');
            return dec;
        }else{
            console.log("Wrong password");
        }


    }






}

let message = Cipher.encrypt("secret", 'p4$$w0rd');
console.log(message);

const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd')

console.log(decryptedMessage); 