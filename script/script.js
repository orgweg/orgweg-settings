var clipboard = new ClipboardJS('#button-copy', {
	text: function(trigger) {
		return trigger.getAttribute('data-clipboard-text');
	}
});

clipboard.on('success', function(e){
	alert('Текст скопирован: ' + e.text);
	e.trigger.classList.add('btn-success');
	setTimeout(function(){
		e.trigger.classList.remove('btn-success');
	}, 3000);
});

clipboard.on('error', function(e){
	alert('Ошибка копирования');
});