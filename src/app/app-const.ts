export class AppConst {
    ja ={
        title: 'ボウリングいろいろ管理'
    }

    en ={
        title: 'BowringManage'
    }

　　// スタティックな自身を返すクラスメソッドを追加
　　public main(code: string){
        if(code == 'en'){
    　　    return this.en;
        }

　　　　return this.ja;
　　}
}
