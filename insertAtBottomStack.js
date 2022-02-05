function isEmpty(count) {
	if (count === 0) return 1;
	else return 0;
}

function insertAtBottom(stack, value) {
    console.log("stack", stack.items)
    if (isEmpty(stack.items)) {
        stack.items[0] = value;
        return;
    }
    for (var i=stack.items.length; i>0; i--) {
        stack.items[i] = stack.items[i-1];
    }
    stack.items[0] = value;
    return stack.items;
}

class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}

	// push(add) the elements into stack
	push(element) {
		this.items[this.count] = element;
		console.log(element + " added at " + this.count);
		this.count++;
		return this.count - 1;
	}

	// pop(delete) elements from stack
	pop() {
		if (isEmpty(this.count)) return "can't perform pop as stack is already empty";
		let deleteItem = this.items[this.count - 1];
		console.log(`deleted ${deleteItem} at ${this.count - 1}`)
		this.count--;
		return deleteItem;
	}
	
	print() {
		if (isEmpty(this.count)) return "stack is empty";
		for (var i=this.count-1; i>=0; i--) {
			console.log(this.items[i] + " ");
		}
	}
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.print());

console.log(insertAtBottom(stack, 555));

stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(insertAtBottom(stack, 1111));

console.log(stack.print());