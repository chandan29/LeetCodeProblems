class ValidWordAbbr{
    constructor(dictionary){
        this.abbrDict = new Map(); 
        for(let word of dictionary){
            let wordAbbr = this.getAbbr(word);
            if(this.isUnique(word)){
                this.abbrDict.set(this.getAbbr(word), word);
            }else{
                this.abbrDict.set(wordAbbr, '');
            }
        }
    }
    getAbbr(word){
        if(word.length < 3){
            return word;
        }else{
            return `${word[0]}${word.length-2}${word[word.length-1]}`;
        }
    }
    isUnique(word){
        let wordAbbr = this.getAbbr(word);
        if(this.abbrDict.has(wordAbbr)){
            return this.abbrDict.get(wordAbbr) === word;
        }else{
            return true;
        }
    }
}