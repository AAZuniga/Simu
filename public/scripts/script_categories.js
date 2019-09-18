$(document).ready(function()
	{
		$('section#pageContent section.detailModule>h1').click(function(event)
			{
				$(this).parent().children('table').toggle();
				$(this).children('img').toggleClass('item-rotate');
			}
		);
	}
);