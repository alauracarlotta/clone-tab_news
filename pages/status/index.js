import { DatabaseStatus } from "components/DatabaseStatus";
import { UpdatedAt } from "components/UpdatedAt";

export default function StatusPage() {
	return (
		<>
			<UpdatedAt />

			<DatabaseStatus />
		</>
	);
}
