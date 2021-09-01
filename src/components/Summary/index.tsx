import { useContext } from "react"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionContext } from "../../TransactionContext"

import { Container } from "./styles"

export function Summary() {
	const {transactions} = useContext(TransactionContext)

	const deposit = transactions.filter(transaction => transaction.type === "deposit").reduce((el, total) => el + total.amount, 0)
	const withdrawl = transactions.filter(transaction => transaction.type === "withdrawl").reduce((el, total) => el + total.amount, 0)
	const total = deposit - withdrawl

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>R${deposit}</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>- R${withdrawl}</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Entradas</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>R${total}</strong>
			</div>
		</Container>
	)
}