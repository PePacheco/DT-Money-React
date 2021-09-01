import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	category: string;
	type: string
	createdAt: Date
}

interface CreateTransactionDTO {
	title: string;
	amount: number;
	category: string;
	type: string
	createdAt: Date
}

interface TransactionProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[]
	createTransaction: (transaction: CreateTransactionDTO) => Promise<void>
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		api.get("transactions")
			.then(response => setTransactions(response.data.transactions))
	}, []);

	async function createTransaction(newTransaction: CreateTransactionDTO) {
		const response = await api.post("/transactions", newTransaction)

		const { transaction } = response.data

		setTransactions([
			...transactions,
			transaction
		])
	}

	return (
		<TransactionContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</ TransactionContext.Provider>
	);
}