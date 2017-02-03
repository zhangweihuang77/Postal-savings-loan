(function() {
	var link = {
		aSelect: document.getElementById("a"),
		bSelect: document.getElementById("b"),
		aryA: ["区域", "分行营业部", "思明区", "湖里区", "集美区", "海沧区", "同安区", "翔安区"],
		aryB: [
			["选择网点"],
			["分行营业部"],
			["思明区营业部", "育秀支行", "美仁宫支行", "富山支行", "金榜支行", "瑞景支行", "观音山支行"],
			["湖里区营业部", "高殿支行", "湖边支行", "嘉禾支行", "马垄支行", "机场支行", "禾山支行", "万达支行", "金尚支行"],
			["集美区营业部", "杏林支行", "灌口支行", "杏北支行"],
			["海沧区营业部", "嵩屿支行", "海虹支行", "霞阳支行"],
			["同安区营业部", "南门支行", "株厝支行", "西柯支行"],
			["翔安区营业部", "新圩支行", "开发新区支行"],
		],
		oneLinkage: function() {
			var sum = null;
			for (var i = 0; i < this.aryA.length; i++) {
				sum += "<option value=" + i + ">" + this.aryA[i] + "</option>";
			}
			this.aSelect.innerHTML = sum;
		},
		twoLinkage: function(x) {
			var sum = null;
			for (var i = 0; i < this.aryB[x].length; i++) {
				sum += "<option >" + this.aryB[x][i] + "</option>";
			}
			this.bSelect.innerHTML = sum;
		},
		listen: function() {
			var self = this;
			this.oneLinkage();
			this.aSelect.onchange = function() {
				self.twoLinkage(self.aSelect.value);
			}
		}
	}
	link.listen();
})()