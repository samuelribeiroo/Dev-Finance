const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transaction = [
    {
        id: 01,
        description: 'Internet',
        amount: -110,
        date: '22/04/2022',
    },

    {
        id: 02,
        description: 'Salário',
        amount: 1212,
        date: '10/05/2022',
    }
]

const DOM = {
    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index

        DOM.transactionContainer.appendChild('tr')
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
        </td>
        `
        return html
    },

    updateBalance() {
        // Change static array of transactions for users input 
    }

}

const Utils = {
    fomatAmout(value) {
        value = value * 100

        return Math.round(value)
    },

    formatDate(date) {
        const splitedDate = date.split('-').reverse().join('/')

        return splitedDate
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? '-' : ''

        value = String(value).replace(/\D/g, '')

        value = Number(value) / 100

        value = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return signal + value
    }
}


DOM.addTransaction(transaction[1])