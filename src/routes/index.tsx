import DefaultLayout from '../layout/default';
import { Router, Route } from '@solidjs/router';
import GenerateCPF from '../pages/cpf';
import GenerateCNPJ from '../pages/GenerateCNPJ';
import Init from '../pages/Init';
const Routers = () => (
	<Router>
		<Route path="/" component={DefaultLayout}>
			<Route path="/" component={Init} />
			<Route path="/cpf" component={GenerateCPF} />
			<Route path="/cnpj" component={GenerateCNPJ} />
		</Route>
	</Router>
);
export default Routers;
