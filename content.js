var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			
			if(text.indexOf("不可") != -1){ //"不可"が見つかったら
				let r = Math.random();
				if(r < 0.5){　// 50%の確率で秀を表示、残り50%の確率で優を表示
					var replacedText = text.replace(/不可/g, "秀");
				}
				else{
					var replacedText = text.replace(/不可/g, "優");
				}
			}
			else if(text.indexOf("可") != -1){ //"不可"が見つからず、"可"が見つかったら
				let r = Math.random();
				if(r < 0.7){ // 70%の確率で秀を表示、残り30%の確率で優を表示
					var replacedText = text.replace(/可/g, "秀");
				}
				else{
					var replacedText = text.replace(/可/g, "優");
				}
			}
			else if(text.indexOf("不合格") != -1){
				var replacedText = text.replace(/不合格/g, "合格");
			}
			else if(text.indexOf("否") != -1){
				var replacedText = text.replace(/否/g, "合");
			}
			else{
				var replacedText = text;
			}
			
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}