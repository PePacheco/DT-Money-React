import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { TransactionContext } from "../../TransactionContext";
import { Container, TransactionTypeContainer, RadioButton } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
	const {createTransaction} = useContext(TransactionContext)

	const [title, setTitle] = useState("")
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState("")
	const [type, setType] = useState("deposit")

	function createNewTransaction(event: FormEvent) {
		event.preventDefault()
		createTransaction({
			title,
			amount,
			type,
			category
		})
	}

	return (
		<Modal 
			isOpen={isOpen} 
			onRequestClose={onRequestClose}
			overlayClassName="new-transaction-modal-overlay"
			className="new-transaction-modal-content"
		>
			<button type="button" onClick={onRequestClose} className="modal-close-button">
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container onSubmit={createNewTransaction}>
				<h2>Cadastrar Transacão</h2>

				<input
					placeholder="Título"
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>

				<input
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={event => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioButton 
						type="button" 
						onClick={() => setType("deposit")}
						isActive={type === "deposit"}
						activeColor="green"
						>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioButton>

					<RadioButton 
						type="button" 
						onClick={() => setType("withdrawl")}
						isActive={type === "withdrawl"}
						activeColor="red"
						>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioButton>
				</TransactionTypeContainer>

				<input
					placeholder="Categoria"
					value={category}
					onChange={event => setCategory(event.target.value)}
					
				/>

				<button type="submit">
					Cadastrar
				</button>
			</Container>
			
		</Modal>
	)
}