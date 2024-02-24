import DefaultLayout from '../layout/default';
import { Router, Route } from '@solidjs/router';
import GenerateCPF from '../pages/cpf';
import GenerateCNPJ from '../pages/cnpj/';
import Init from '../pages/Init';
import ConvertNumbers from '../pages/ConvertNumbers';
import GenerateRG from '../pages/rg';
const Routers = () => (
	<Router>
		<Route path="/" component={DefaultLayout}>
			<Route path="/" component={Init} />
			<Route path="/cpf" component={GenerateCPF} />
			<Route path="/convert-numbers" component={ConvertNumbers} />
			<Route path="/cnpj" component={GenerateCNPJ} />
			<Route path="/generate-rg" component={GenerateRG} />
		</Route>
	</Router>
);
export default Routers;
