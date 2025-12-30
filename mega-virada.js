let nums = [];
let all_nums = [];

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

for (let c = 1; all_nums.length < 10; c++) {
	nums = [];
	for (let i = 0; nums.length < 6; i++) {
		let num_shot = getRandomArbitrary(1, 60);
		if (!nums.includes(Math.round(num_shot))) {
			nums.push(Math.round(num_shot));
		}
	}
	all_nums.push(nums.sort((a, b) => a - b));
}
console.log(all_nums);
