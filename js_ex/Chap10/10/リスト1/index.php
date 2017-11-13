<?php
// Ajaxからのリクエストの場合はヘッダーを表示
if (!isset($_SERVER['HTTP_X_AJAX_REQUEST'])) {
?>
<!DOCTYPE html>
<html>
<body>
<!-- ページ全体が変わっていないことを確認するために
     現在時刻を出力する -->
<?php echo date('Y/m/d H:i:s'); ?>
  <div id="content">
<?php } ?>

    <?php if (!isset($_GET['page']) || $_GET['page'] != 'b') { ?>

        <h1>Page A</h1>
        <a href="?page=b">Page B</a><br>

    <?php } else { ?>

        <h1>Page B</h1>
        <a href="?page=a">Page A</a><br>

    <?php } ?>

<?php
// Ajaxからのリクエストの場合はフッターを表示
if (!isset($_SERVER['HTTP_X_AJAX_REQUEST'])) {
?>
  </div>
  <script src="pushstate.js"></script>
</body>
</html>
<?php } ?>

