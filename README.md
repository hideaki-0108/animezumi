# animezumi（アニメズミ）

「ズミ」は宮古島の方言で「最高」を意味します。
このプロジェクトは、様々なアニメーションのアイディアを集めたポートフォリオ集です。

## プロジェクト概要

animezumi は、創造的なアニメーションのアイディアを収集し、表現するためのプラットフォームです！
将来的には何百、何千ものアニメーションアイディアを集約し、インスピレーションの源となることを目指しています。

## 技術スタック

- [Astro](https://astro.build/) - 高速なフロントエンドフレームワーク
- [React](https://reactjs.org/) - UI コンポーネント構築（導入検討中）
- [GSAP](https://greensock.com/gsap/) - 高度なアニメーションライブラリ
- [Sass](https://sass-lang.com/) - CSS プリプロセッサ

## 採用ライブラリと選定理由

### コア技術

| ライブラリ                              | 採用理由                                                                                                                          |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **[Astro](https://astro.build/)**       | 高速なパフォーマンス、部分的なハイドレーション、マルチフレームワーク対応が可能。アニメーション重視のサイトに最適な軽量性を提供。  |
| **[GSAP](https://greensock.com/gsap/)** | 業界標準のアニメーションライブラリ。複雑なタイムラインやインタラクションを簡単に実装可能で、ブラウザ互換性も優れている。          |
| **[Sass](https://sass-lang.com/)**      | 変数、ミックスイン、ネスト構造などの機能で CSS を効率的に記述できる。アニメーション関連のスタイリングを整理しやすい。             |
| **[React](https://reactjs.org/)**       | コンポーネントベースの UI 構築とステート管理が容易。Astro と組み合わせて必要な箇所だけに React を使用し、パフォーマンスを最適化。 |

### 開発ツール

| ツール                                                                                                | 採用理由                                                                                     |
| :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| **[TypeScript](https://www.typescriptlang.org/)**                                                     | 型安全性によるバグ防止と開発効率向上。大規模なアニメーションコレクションの管理に適している。 |
| **[ESLint](https://eslint.org/)**                                                                     | コード品質を維持し、一貫性のあるコーディングスタイルを確保。潜在的な問題を早期に発見できる。 |
| **[Prettier](https://prettier.io/)**                                                                  | コードフォーマットの自動化によりコードの可読性向上と開発者間の一貫性を保証。                 |
| **[Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)** | コミット前の自動チェックで品質の高いコードベースを維持。チーム開発での一貫性確保に役立つ。   |

## プロジェクト構成

【概要】

```text
/
├── public/               # 静的ファイル
│   ├── favicon.svg
│   └── assets/           # 画像など静的アセット
├── src/
│   ├── assets/           # SCSS、画像など
│   │   └── css/       # グローバルSCSSファイル
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── ui/           # ボタン、カードなどの基本UI
│   │   └── animations/   # アニメーションコンポーネント
│   ├── layouts/          # ページレイアウト
│   ├── pages/            # 各ページ
│   │   └── animations/   # アニメーション別のページ
│   └── utils/            # ユーティリティ関数
└── .lib/                 # カスタムフック、アニメーションヘルパーなど
```

### 各ディレクトリの詳細

#### public/assets/ に配置すべきもの

- ファビコン、ロゴ、OGP画像など変更頻度が低い静的アセット
- ビルド時に処理する必要がないファイル
- 直接URLで参照したい画像（例：`/assets/logo.png`）
- 大きなサイズや大量の画像ファイル
- PDFやフォントなどのその他の静的ファイル

#### src/assets/ に配置すべきもの

- アニメーションで使用する画像やSVG
- 最適化や変換が必要な画像（Astroのビルドプロセスで最適化される）
- コンポーネントから直接インポートして使用する画像
- CSSやSassから参照される画像
- JSやTSのコードからインポートするその他のアセット

インポート例：

```javascript
// Astroコンポーネント内
import animationImage from "../assets/images/animation1.png";
```

基本ルール：「ビルド時に処理・最適化したいものは `src/`、そのままの形で配信したいものは `public/`」

#### SCSS/CSSのディレクトリ構造と読み込み方法

アニメーションに特化したプロジェクトのため、効率的なスタイル管理を行います。

```text
src/assets/css/
├── base/                  # リセットやベーススタイル
│   ├── _reset.scss
│   └── _typography.scss
├── abstracts/             # 変数、ミックスイン、関数
│   ├── _variables.scss    # カラー、フォント、サイズなど
│   └── _mixins.scss       # 再利用可能なミックスイン
├── components/            # コンポーネント別スタイル
│   └── _buttons.scss
├── animations/            # アニメーション関連スタイル
│   ├── _keyframes.scss    # @keyframesの定義
│   ├── _transitions.scss  # トランジション関連
│   └── _effects.scss      # 特殊効果スタイル
├── layout/                # レイアウト要素
│   ├── _header.scss
│   └── _footer.scss
├── index.scss             # グローバルで必要最低限のスタイル
└── pages/                 # ページ固有のスタイル
    └── _home.scss
```

**最適化された読み込み方法**:

- 必要なスタイルのみをコンポーネントごとに読み込み、ページサイズを最適化
- グローバルな共通スタイルは最小限に抑える

```astro
<!-- コンポーネント内でのスタイル読み込み例 -->
<style lang="scss">
  @import "../assets/css/abstracts/variables";
  @import "../assets/css/animations/keyframes";

  .animation-component {
    // コンポーネント固有のスタイル
  }
</style>
```

#### JSファイルの配置ガイドライン

- **components/animations/**: アニメーションのロジックを含むコンポーネント
- **utils/**: 複数コンポーネントで共有するユーティリティ関数
- **scripts/**: グローバルなスクリプト（スクロール処理、ナビゲーション制御など）

アニメーションに関するJSコードは、基本的に対応するコンポーネント内に直接記述することで、コードの関連性と保守性を向上させます。

## 将来の展望

現在は GSAP や CSS アニメーションを中心に実装していますが、今後は以下の技術も取り入れる予定です：

- [Three.js](https://threejs.org/) - 3D グラフィックス
- [A-Frame](https://aframe.io/) - WebVR 体験
- その他の WebGL ベースのアニメーション技術

## コマンド

プロジェクトルートから実行可能なコマンド一覧：

| コマンド            | アクション                                           |
| :------------------ | :--------------------------------------------------- |
| `npm install`       | 依存関係のインストール                               |
| `npm run dev`       | 開発サーバーを `localhost:4321` で起動               |
| `npm run build`     | 本番用サイトを `./dist/` にビルド                    |
| `npm run preview`   | デプロイ前にビルドをローカルでプレビュー             |
| `npm run astro ...` | `astro add` や `astro check` などの CLI コマンド実行 |

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
