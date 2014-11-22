App.Helpers.CssTitles = {

	run: function () {

		var classes = {};
		$("*").each(function(index, item){
			classes[item] = $(item).attr("class");
			if (!$(item).attr("title")) {
				$(item).attr("title", classes[item])
			};
		});

		
	}

}