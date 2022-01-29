import { TransactionsTable } from "../../TransactionsTable";
import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";

export function Dashboard () {
    return(
        <Container>
        <Summary />
        <TransactionsTable />
        </Container>
    );
}