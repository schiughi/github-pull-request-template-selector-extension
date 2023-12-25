# GitHub Pull Request Template Selector Extension

このChrome Extensionは、GitHubのリポジトリで異なる種類のプルリクエストに対して適切なテンプレートを自動的に選択します。ブランチ名のプレフィックスに基づいて、関連するテンプレートを`/compare`ページのクエリストリングに自動的に付与することで、プルリクエストの作成プロセスを効率化します。

## 機能

- **プルリクエストテンプレートの自動選択:** ブランチ名のプレフィックスに基づいて、`.github/PULL_REQUEST_TEMPLATE`内の対応するMarkdownテンプレートファイル（例：`feature.md`、`fix.md`）を選択します。
- **URL変更の自動化:** ブランチ名に基づいて`/compare`ページのURLに適切なクエリストリングを自動的に追加します。

## インストール方法

1. このリポジトリをクローンまたはダウンロードします。
2. Chromeブラウザで`chrome://extensions/`にアクセスし、右上の「デベロッパーモード」を有効にします。
3. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードした拡張機能のフォルダを選択します。

## 使用方法

1. GitHubのリポジトリページ（`https://github.com/OWNER/REPO`）にアクセスします。
2. プルリクエストを作成するために、ブランチ比較ページ（`/compare`）に移動します。
3. ブランチ名のプレフィックスに基づいて、自動的に適切なプルリクエストテンプレートが選択されます。
4. `?template=テンプレート名.md`の形式でクエリストリングがURLに追加されます。

## テンプレートの設定

プルリクエストテンプレートは、`.github/PULL_REQUEST_TEMPLATE`ディレクトリ内にMarkdownファイルとして保存します。例えば：

```
.github
└── PULL_REQUEST_TEMPLATE
    ├── feature.md
    ├── fix.md
    └── refactor.md
```

各テンプレートは、ブランチ名のプレフィックス（`feature`、`fix`、`refactor`など）に対応しています。
