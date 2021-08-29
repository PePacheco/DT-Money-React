import { Container } from "./styles";

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<th>Título</th>
					<th>Valor</th>
					<th>Categoria</th>
					<th>Data</th>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de Sites</td>
						<td className="deposit">R$10.000</td>
						<td>Desenvolvimento</td>
						<td>21/01/2010</td>
					</tr>
					<tr>
						<td>Conta de luz</td>
						<td className="withdrawl">- R$1.000</td>
						<td>Desenvolvimento</td>
						<td>21/01/2010</td>
					</tr>
				</tbody>
			</table> 
		</Container>
	)
}