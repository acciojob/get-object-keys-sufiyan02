//your JS code here. If required.
class Student {
	constructor(name) {
		this.name=name;
	}

	getkeys(){
		return Object.keys(this);
	}
}

const s =new Student("John")
console.log(s.getkeys())