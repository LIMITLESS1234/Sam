class Book{
	constructor(bookName, author, number){
		this.bookName = bookName
		this.author = author
		this.number = number
	}
}

class UI{
	addBook(books){
		let a = document.getElementById('tabl');
		let TR = document.createElement('tr')
		TR.innerHTML = `
		<td>${books.bookName}</td>
		<td>${books.author}</td>
		<td>${books.number}</td>
		<td><a href="#" class="delete">X</a></td>
		`
		a.appendChild(TR)
	}

	deleteBook(target){
		if(target.className === 'delete'){
			target.parentElement.parentElement.remove();
		}
	}

	showAlert(message, className){
		const div = document.createElement('div')

		div.className = `alert ${className}`

		div.appendChild(document.createTextNode(message));

		const container = document.getElementById('book')

		const form = document.getElementById('main')

		form.insertBefore(div, container)

		setTimeout(function() 
			{document.querySelector('.alert').remove()}, 3000);

}

	clearFields(){
		bookName = document.getElementById('bookName').value = ''
	    author = document.getElementById('author').value = ''
	    number = document.getElementById('IDBIauthor').value = ''
	}
	}

document.getElementById('btn').addEventListener('click', (e) => {
	const bookName = document.getElementById('bookName').value
	const author = document.getElementById('author').value
	const number = document.getElementById('IDBIauthor').value




const book = new Book(bookName, author, number)

const ui = new UI
	if(bookName === '' || author === '' || number === '') {
		ui.showAlert('Please Enter all the fields', 'enter')
	} else {
ui.addBook(book);

ui.showAlert('Book Added Successfully', 'success')

}

ui.clearFields();

e.preventDefault();

})

document.getElementById('tabl').addEventListener('click', (e) => {
	const ui = new UI();

	ui.deleteBook(e.target);

	ui.showAlert('Removed Successfully', 'rem')

	e.preventDefault();
})