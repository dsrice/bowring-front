//url関連の定数クラス
import * as key from './sessionkey';

// 通信方式
export const method = "http://";

// ホスト情報
export const host = "127.0.0.1:8000/";

// ヘッダー情報
export const header = {
    'Content-Type': 'application/json'
  };

// path情報
// 認証
export const auth = "api-auth/"

const version = "v1/"

// ユーザ一覧
export const users_list = version + "users/"
