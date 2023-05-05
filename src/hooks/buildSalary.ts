function currencyFormat(num: number) {
	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "VNĐ";
}

export const buildSalary = (min: number, max: number) => {
	if (!min && !max) return "Thỏa Thuận";
	else if (min && !max) return `Trên ${currencyFormat(min)}`;
	else if (!min && max) return `Upto ${currencyFormat(max)}`;
	else return `${currencyFormat(min)}~${currencyFormat(max)} `;
};
