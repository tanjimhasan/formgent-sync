<style>
    .newform {
        position: relative;
    }

    .newform .preloader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.8);
        z-index: 10;
    }

    .newform .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
<div class='newform newform-shortcode' data-form_id="<?php newform_render( $form_id )?>">
    <div class='preloader'>
        <div class='loader'></div>
    </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const newform = document.querySelector('.newform');
    if (newform) {
      setTimeout(function() {
        newform.innerHTML = '<span style="font-size: 100px">🥱➡️🛌</span>';
      }, 1000);
    }
  });
</script>
