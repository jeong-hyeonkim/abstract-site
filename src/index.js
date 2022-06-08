class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name) {
                throw new Error('중복된 이름이 있습니다.');
            }
        }
        board.addedBoard = true;
        this.boards.push(board);
    }

    findBoardByName(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board) {
                return this.boards[i];
            }
        }
    }
    
}

class Board {
    constructor(name){
        if(name===''||name===null){
            throw new Error('다시하세요')
        }
        this.name = name;
        this.addedBoard = false;
        this.articles = [];
        
    }
    publish(article){
        if(this.addedBoard===false){
            throw new Error('article을 추가할 수 없습니다.')
        }
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        article.addedboard = true;
        this.articles.push(article);
}
getAllArticles(){
    return this.articles;
}
}

class Article {
    constructor(article){
        const{subject, content, author} = article;
        if(subject === ''||subject === null){
             throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
            }
        if(content === ''||content === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        if(author === ''||author === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.addedboard = false;
        this.comments = [];
    }
    reply(comment){
        if(this.addedboard === false){
            throw new Error('comment를 추가할 수 없습니다.')
        }
        comment.createdDate = new Date().toISOString();
         this.comments.push(comment);
    }
    getAllComments(){
        return this.comments;
    }


}

class Comment {
    constructor(comment){
        const{content, author} = comment;
        if(content === ''||content === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        if(author === ''||author === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        this.content = content;
        this.author = author;

    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};