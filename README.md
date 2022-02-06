# Reactチュートリアルの五目並べを関数コンポーネントでカスタム
## 概要
- React公式チュートリアルの五目並べはクラスコンポーネントで書かれているので、今回はそれを関数コンポーネントで書き換えてみました。
- 主に書き換える部分は、stateのあたり。
- もっと良い書き方はあると思います。

##　改善点
- 冗長なコード多い。
  - stateの管理をBoardコンポーネントで行っているが、squaresのstate変更が分かりづらい
- 基本的にstateぐらいの書き換えしかしていない
- まだGameコンポーネントへの移植が終わっていない
## 感想
- 当方まだまだReact初心者なので改善すべきことが多いが、Usestate等の基本的知識が少し身に着いた
- これからも改善を続けたい。
