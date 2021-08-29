import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

	function didOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	} 

	function didCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

  return (
    <>
      <Header onOpenNewTransactionModal={didOpenNewTransactionModal} />

      <Dashboard />

      <Modal 
					isOpen={isNewTransactionModalOpen} 
					onRequestClose={didCloseNewTransactionModal}
				>
					<h2>Cadastrar Transacão</h2>
				</Modal>

      <GlobalStyle />
    </>
  );
}
