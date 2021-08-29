import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioButton } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
	const [type, setType] = useState("deposit")

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

			<Container>
				<h2>Cadastrar Transacão</h2>

				<input
					placeholder="Título"
				/>

				<input
					type="number"
					placeholder="Valor"
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
				/>

				<button type="submit">
					Cadastrar
				</button>
			</Container>
			
		</Modal>
	)
}