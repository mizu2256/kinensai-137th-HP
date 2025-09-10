$(document).ready(function() {
  const popupKey = 'popup_shown';
  const popupData = localStorage.getItem(popupKey);
  console.log(popupData)
  const now = new Date().getTime(); // 現在のタイムスタンプ

  // ポップアップが未表示、または有効期限が切れているかチェック
  if (!popupData || (now - popupData > 30 * 1000)) {
    // 1日以上経っている場合、または初回訪問の場合、ポップアップを表示
    // 24 * 60 * 60
    $('.popup-overlay').fadeIn();

    // 閉じるボタンをクリックで非表示にし、ローカルストレージに表示済み情報を保存
    $('.close-btn').on('click', function() {
      $('.popup-overlay').fadeOut();
      localStorage.setItem(popupKey, now); // タイムスタンプを保存
    });

    // ポップアップの枠外をクリックで非表示にし、ローカルストレージに表示済み情報を保存
    $('.popup-overlay').on('click', function(e) {
      if (e.target === this) {
        $('.popup-overlay').fadeOut();
        localStorage.setItem(popupKey, now); // タイムスタンプを保存
      }
    });
  }
});