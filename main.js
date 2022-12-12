// #7 HTML Factory Functions

// obj given w/ instructions
const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


// define a func
const computerType = (obj) =>{
// make HTML to rep computer
const computerHTML = `<section id="computer--1">
 <h1>Apple Macbook</h1>
<div>Model: Pro</div>
<div>Memory: 32 GB</div>
 <div>Hard drive space: 500 GB</div>
 <div>Processor speed: 2.4 Ghz</div>
 </section>`

// return the HTML
return computerHTML;
}

// invoke the function (computer) to computer type to create stringReturned
const stringReturned = computerType(computer);
console.log(stringReturned);

