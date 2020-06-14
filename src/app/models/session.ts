export class Session { // 追加
    login: boolean;
  
    constructor() {
      this.login = false;
    }

    reset(): Session { // 追加
        this.login = false;
        return this;
      }
    
  }