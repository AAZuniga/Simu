$(document).ready(function()
	{
		// Fermer automatiquement le menu si un clic est détecté en dehors du menu ouvert
		$(document).click(function()
			{
				if($('section#menu>a#menuButton').hasClass('active'))
				{
					fermerMenu();
				}
			}
		);
		// Ne pas fermer le menu si le clic est détecté dans le menu
		$('section#menu>ul#menuList').click(function(event)
			{
				event.stopPropagation();
			}
		);
		// Au clic du bouton...
		$('section#menu>a#menuButton').click(function(event)
			{
				event.stopPropagation(); // Ne pas fermer le menu si le clic est détecté dans sur le bouton
				if(!$(this).hasClass('active'))
				{
					ouvrirMenu();
				}
				else
				{
					fermerMenu()
				}
			}
		);
	}
);

function ouvrirMenu()
{
	
	$('section#menu>a#menuButton').addClass('active');
	$('section#menu>a#menuButton').css("background", "white");
	$('section#menu>a#menuButton').css("color", "#35b4e9");
	$('section#menu>a#menuButton').css("border-radius", "10px 10px 0px 0px");
	$('section#menu>a#menuButton').css("box-shadow", "0px 10px 0px white");
	$('section#menu>a#menuButton').css("-webkit-box-shadow", "0px 10px 0px white");
	$('section#menu>a#menuButton>img').attr("src","../images/blue_arrow.png");
	$('section#menu>a#menuButton>img').addClass('rotate');
	$('section#menu>a#menuButton>img').removeClass('reset-rotate');
	// Modification du menu
	$('section#menu>ul#menuList').slideDown(200);
	
}

function fermerMenu()
{
	$('section#menu>a#menuButton').removeClass('active');
	// Modification du menu
	$('section#menu>ul#menuList').slideUp(200, function()
		{
			// Modification du bouton à la fin de l'animation
			$('section#menu>a#menuButton').css("background", "#35b4e9");
			$('section#menu>a#menuButton').css("color", "white");
			$('section#menu>a#menuButton').css("border-radius", "10px");
			$('section#menu>a#menuButton').css("box-shadow", "none");
			$('section#menu>a#menuButton').css("-webkit-box-shadow", "none");
			$('section#menu>a#menuButton>img').attr("src","../images/white_arrow.png");
			$('section#menu>a#menuButton>img').addClass('reset-rotate');
			$('section#menu>a#menuButton>img').removeClass('rotate');
		}
	);
}