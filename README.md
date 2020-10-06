# 概要

Rails + Reactのtodoアプリ
React.jsに関するファイルは./todo_front内にあります。

RailsとReact.jsの組み合わせ方としては
* react-rails gemを用いる
* react_on_rails gemを用いる
* RailsとReactを分離し、別々に作成する

の三通りが考えられます。
参考(https://qiita.com/k-penguin-sato/items/e3cc04f787cf3254cfae)

問題発生時の対処のしやすさ等を考え、今回はRails,Reactを分離して実装しています。  
React.jsはUI、RailsはAPIサーバを担当しており、必要に応じてReact.js側からRailsへリクエストを送り、データのやり取りを行っています。

# 利用ツール
* Rails
* React.js
    * node.js
    * npm
* material-ui 
* sqqlite3

# インストール
## Reactの初期設定

* node.js
* npm
をそれぞれインストールする。
その後以下のコマンドを実行し、パッケージをインストールする。

```
cd ./todo_front
npm install
```


## DBの設定をする

```
rake db:create
rake db:migrate
```

# 利用法
## Railsの起動

```
rails s -p 3001
```

## React.jsの起動

```
cd ./todo_front
npm run start
```
