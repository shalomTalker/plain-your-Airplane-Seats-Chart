

 $("form").submit(function(e)
 {
	e.preventDefault();

	if ($('.grid-panel')) 
	{
        $('.grid-panel').remove();
    }

	if ($('span')) 
	{
        $('span').remove();
    }

    if ($('.btns')) 
	{
        $('.btns').remove();
        $('bold').remove();
    }
	
	if ($('input').val() == '') 
	{
	    var alert = $('<span>', 
	    {
	    	text: "**Input can not be left blank",
			css: 
			{
				color: "red",
				display: "block"
			}	    	
	    }).appendTo('form');
	}
	else
	{
		var numColumns = Number($('.columns').val());
		var numRows = Number($('.rows').val());

	 	var numPanels = num2Array(numRows * numColumns);

		var arrColumns = num2Array(numColumns);
		var arrRows = num2Array(numRows);

			var width = numRows * 80;
			var height = numColumns * 80;

		var gridPanel = $('<div>').addClass("grid-panel").width(width).height(height);
		for (var i = 0; i < numPanels.length; i++) 
		{
			var panel = $('<div>', 
			{
				text: i + 1 ,
				class: "panel", 
				click: function (e)
				{
					e.preventDefault();
					var choseChair = $(event.target);
					choseChair.toggleClass('red');
				},
			});
			panel.appendTo(gridPanel);
			gridPanel.appendTo('.container');
		}


		
		var btns = $('<div>', 
		{
			class: "btns input-group-btn",
			css: 
			{
				width: "100%", 
				display: "flex", 
				justifyContent: "center",
				marginTop: "1rem"
			},
		});

		var priceBtn = $('<button>', 
		{
			class: "price btn btn-default", 
			text: "Price",
			css: {marginRight: "1rem"},
			click: function (e)
			{

				if ($('bold')) 
				{
			        $('bold').remove();
			    }
				var onlyPrice = 100;
				var multiPrice = 200;
				var totalPrice = 0;

				var numChairs = Number($('*.red').length);
				console.log(jQuery.type(numChairs));

				if (numChairs < 2) 
					{
						totalPrice = onlyPrice * numChairs;
					} 
					else if (numChairs > 1) 
					{
						totalPrice = multiPrice * numChairs;
					}
					console.log(totalPrice);
				resPrice = $('<bold>', 
					{
						text: "Your calculated price for " + numChairs + " people is " + totalPrice + " $ ." ,
						css: 
						{
							fontSize: "20px",
							marginTop: "2rem"
						}
					});
				resPrice.appendTo('.container');
			},
		});
		priceBtn.appendTo(btns);

		var resetBtn = $('<button>', 
		{
			class: "reset btn btn-default", 
			text: "Reset",
			css: {marginLeft: "1rem"},
			click: function (e)
			{
				$('.red').removeClass('red');
				$('bold').empty();
			},
		});
		resetBtn.appendTo(btns);

		if ($('.btns'))
			{
		        $('.reset').remove();
		        $('.price').remove();
		    }

		btns.appendTo('.container');
		$('input').val("");
	}
});
function num2Array(num) 
{
		var n = [];
		for (var i = 0; i < num; i++) 
		{
				n.push(i+1);
				
		}
		return n;
}
