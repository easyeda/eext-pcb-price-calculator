document.addEventListener('DOMContentLoaded', function () {
	const priceConditions = [];
	const totalPriceElement = document.getElementById('totalPrice');

	document.getElementById('addCondition').addEventListener('click', function () {
		const conditionName = prompt('请输入计价条件名称:');
		const conditionType = prompt('请输入计价类型（面积类型或一次性类型）:');
		const conditionAmount = parseFloat(prompt('请输入金额:'));

		if (conditionName && conditionType && !isNaN(conditionAmount)) {
			const condition = {
				name: conditionName,
				type: conditionType,
				amount: conditionAmount,
			};
			priceConditions.push(condition);
			renderConditions();
		}
	});

	document.getElementById('calculate').addEventListener('click', function () {
		const width = parseFloat(document.getElementById('width').value);
		const height = parseFloat(document.getElementById('height').value);
		const basePrice = parseFloat(document.getElementById('basePrice').value);

		if (isNaN(width) || isNaN(height) || isNaN(basePrice)) {
			alert('请输入有效的宽度和高度以及基础价格。');
			return;
		}

		let areaPrice = width * height * basePrice;
		let additionalCost = 0;

		priceConditions.forEach((condition) => {
			if (condition.type === '面积类型') {
				areaPrice += width * height * condition.amount;
			} else if (condition.type === '一次性类型') {
				additionalCost += condition.amount;
			}
		});

		const total_price = areaPrice + additionalCost;
		totalPriceElement.textContent = total_price.toFixed(2);
	});

	function renderConditions() {
		const conditionsContainer = document.getElementById('priceConditions');
		conditionsContainer.innerHTML = ''; // 清空现有条件

		priceConditions.forEach((condition, index) => {
			const conditionElement = document.createElement('div');
			conditionElement.textContent = `${condition.name} (${condition.type}): ${condition.amount}元`;
			const deleteButton = document.createElement('button');
			deleteButton.textContent = '删除';
			deleteButton.addEventListener('click', function () {
				priceConditions.splice(index, 1); // 从数组中删除条件
				renderConditions(); // 重新渲染条件
			});
			conditionElement.appendChild(deleteButton);
			conditionsContainer.appendChild(conditionElement);
		});
	}
});
