import { Expenses } from "components/Expenses";
import { Income } from "components/Income";
import { MainAccount } from "components/MainAccount";

export default function HomePage() {
	return (
		<div>
			Home
			<MainAccount />
			<div style={{ display: "flex" }}>
				<div style={{ color: "green" }}>
					<Income />
				</div>
				<div style={{ color: "red" }}>
					<Expenses />
				</div>
			</div>
		</div>
	);
}
