$(document).ready(function() {
  const popupKey = 'popup_shown';
  const noShowAgainKey = 'do_not_show_again';
  const popupData = localStorage.getItem(popupKey);
  const doNotShowAgain = localStorage.getItem(noShowAgainKey);
  const now = new Date().getTime();

  // 「今後表示しない」がチェック済みの場合、ポップアップは表示しない
  if (doNotShowAgain === 'true') {
    return; // ここで処理を終了
  }

  // ポップアップが未表示、または有効期限が切れているかチェック
  if (!popupData || (now - popupData > 5 * 1000)) {
    // ポップアップを表示
    $('.popup-overlay').fadeIn();

    // 閉じるボタンまたは枠外をクリックで非表示
    $('.close-btn, .popup-overlay').on('click', function(e) {
      // 枠外クリックの場合、子要素をクリックしていないことを確認
      if ($(e.target).hasClass('popup-overlay') || $(e.target).hasClass('close-btn')) {

        // チェックボックスの状態を確認
        if ($('#do-not-show-again').is(':checked')) {
          // チェックが入っていたら、永続的に表示しない設定を保存
          localStorage.setItem(noShowAgainKey, 'true');
        } else {
          // チェックが入っていない場合は、1日間のクールダウンを設定
          localStorage.setItem(popupKey, now);
        }

        // ポップアップを非表示
        $('.popup-overlay').fadeOut();
      }
    });
  }
});