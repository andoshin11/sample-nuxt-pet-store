# Sample Pet Store
WIP

# 動作環境
| Engine | version |
| --- | --- |
| Node | 10.15.1 |
| Yarn | 1.13.0 |

上記環境以外では動作できないようになっています。(参照: [package.json](package.json))

Nodebrew等を用いてNodeのバージョン管理を行うよう、よろしくお願いします。

# 環境設定
## パッケージのインストール
下記コマンドを実行してトップレベルの `package.json`および `storybook/package.json`、 `mockServer/package.json`に定義された npm パッケージのインストールを行ってください。

```bash
$ yarn run bootstrap
```

# 開発時

## アプリケーションサーバーの立ち上げ

localhost:3000 に HMR を有効にした状態で起動

```bash
$ yarn run dev
```

## モックサーバーを利用する
下記のコマンドを実行すると、 localhost:3010 でモックサーバーが起動します

```bash
$ yarn run serve:agreed
```

上記モックサーバーをアプリケーションから参照するには、下記のコマンドを実行して専用モードで起動してください。

```bash
$ yarn run dev:agreed
```

## Storybook の立ち上げ

localhost:9001 に HMR を有効にした状態で起動

```bash
$ yarn run storybook
```
