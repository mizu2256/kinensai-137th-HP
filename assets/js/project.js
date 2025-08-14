// 講堂企画
const kodoMore = document.querySelector(".kodo-more");
const openKodo = document.querySelector(".open-kodo");
const closeKodo = document.querySelector(".close-kodo");

// クラス企画
const classMore = document.querySelector(".class-more");
const openClass = document.querySelector(".open-class");
const closeClass = document.querySelector(".close-class");

// 模擬店
const shopMore = document.querySelector(".shop-more");
const openShop = document.querySelector(".open-shop");
const closeShop = document.querySelector(".close-shop");

// ステージ企画
const stageMore = document.querySelector(".stage-more");
const openStage = document.querySelector(".open-stage");
const closeStage = document.querySelector(".close-stage");


// アニメーションを適用する汎用関数
function setupToggle(openButton, closeButton, content) {
  // ボタンがクリック可能かどうかを管理するフラグ
  let isClickable = true;

  // 「もっと見る」クリック時の処理
  openButton.addEventListener("click", function(){
    if (!isClickable) return;
    
    isClickable = false;

    content.classList.remove("hide-animation");
    setTimeout(() => {
      content.classList.add("show-animation");
    }, 10);
    openButton.classList.add("hide");
    closeButton.classList.remove("hide");

    setTimeout(() => {
      isClickable = true;
    }, 600);
  });

  // 「閉じる」クリック時の処理
  closeButton.addEventListener("click", function(){
    if (!isClickable) return;
    
    isClickable = false;
    
    content.classList.remove("show-animation");
    content.addEventListener("transitionend", function handler(){
      content.classList.add("hide-animation");
      content.removeEventListener("transitionend", handler);
    });
    openButton.classList.remove("hide");
    closeButton.classList.add("hide");

    setTimeout(() => {
      isClickable = true;
    }, 600);
  });
}

setupToggle(openKodo, closeKodo, kodoMore);
setupToggle(openClass, closeClass, classMore);
setupToggle(openShop, closeShop, shopMore);
setupToggle(openStage, closeStage, stageMore);