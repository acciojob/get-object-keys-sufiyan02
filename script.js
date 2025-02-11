//your JS code here. If required.
class Student {
	constructor(name) {
		this.name=name;
	}

getkeys(){
	return Object.keys(this)
}
}


console.log(getkeys(s))