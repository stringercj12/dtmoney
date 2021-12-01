import React, { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Desenvolvimento de web site
            </td>
            <td className="deposit">
              R$ 12.000
            </td>
            <td>
              Desenvolvimento
            </td>
            <td>
              20/02/2021
            </td>
          </tr>
          <tr>
            <td>
              Aluguel
            </td>
            <td className="withdraw">
              - R$ 1.100,00
            </td>
            <td>
              Casa
            </td>
            <td>
              17/02/2021
            </td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}