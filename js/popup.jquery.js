(function($){
	$.fn.popup = function(content) {

		this.each(function(){
			var overlay = $('<div>');
			var modal = $('<div>');
			var closeBtnWrap = $('<div>');
			var closeBtn = $('<span>');

			overlay.addClass('popup-overlay');
			modal.addClass('popup-modal');
			closeBtnWrap.addClass('popup-btn-wrap');
			closeBtn.addClass('popup-close-btn');
			closeBtn.text('+');

			closeBtnWrap.html(closeBtn);
			modal.html(closeBtnWrap);
			modal.append(content);
			overlay.html(modal);

			$('body').append(overlay);
			overlay.hide();
			overlay.fadeIn(600);

			closeBtn.on('click', function(){
				overlay.fadeOut(600, function(){
					overlay.remove();
				});
			}); // hide popup with click on btn

			overlay.on('click', function(e){
				if (e.target == this) {
	          overlay.fadeOut(600, function(){
						overlay.remove();
					});
         }
			}); // hide popup with click on overlay

      $(document).on('keydown', function(e){
      	if (e.keyCode === 27) {
	          overlay.fadeOut(600, function(){
						overlay.remove();
					});
        }
      }); // hide popup with click on ESC key

		});

		return this;
	};

})(jQuery);