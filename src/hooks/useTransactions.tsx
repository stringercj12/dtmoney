import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);

function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction, } = response.data;
    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])


  return (
    <TransactionContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  )

}

function useTransactions() {
  return useContext(TransactionContext);
}


export {
  TransactionProvider,
  useTransactions
}