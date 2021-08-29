import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
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

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={didCloseNewTransactionModal} />

      <GlobalStyle />
    </>
  );
}
