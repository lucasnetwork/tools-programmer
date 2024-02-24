/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Routers from './routes';
import { Toaster } from 'solid-toast';

render(
	() => (
		<>
			<Toaster />
			<Routers />
		</>
	),
	document.getElementById('root')!,
);
