import { ActiveConnections } from "components/ActiveConnections";
import { MaxConnections } from "components/MaxConnections";
import { UpdatedAt } from "components/UpdatedAt";
import { Version } from "components/Version";

export default function StatusPage() {
	return (
		<>
			<div style={{ margin: "25px 48px" }}>
				<h1>Status Page</h1>
				<UpdatedAt />
				<div style={{ display: "flex", alignItems: "center" }}>
					<h2 style={{ marginRight: "10px" }}>Versão:</h2>
					<Version />
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<h2 style={{ marginRight: "10px" }}>Conexões máximas:</h2>
					<MaxConnections />
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<h2 style={{ marginRight: "10px" }}>Conexões Ativas:</h2>
					<ActiveConnections />
				</div>
			</div>
		</>
	);
}
