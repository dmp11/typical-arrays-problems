
exports.min = function min (array) {
	if(array !== undefined){
		if(array.length > 0){
			let num = array[0];
			for(let i=0; i<array.length; i++){
				if (array[i] < num) num = array[i];
			}
			return num;
		}
	}
	return 0; 	
}

exports.max = function max (array) {
	if(array !== undefined){
		if(array.length > 0){
			let num = array[0];
			for(let i=0; i<array.length; i++){
				if(array[i] > num){
					num = array[i];
				}
			}return num;
		}
	}
	return 0;
}

exports.avg = function avg (array) {
	if(array !== undefined){
		if(array.length > 0){
			let num = array[0];
			let i;
			for(i=1; i<array.length; i++)
				num += array[i];
			return num/i;
		}
	}
	return 0;
}
