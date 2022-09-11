/* eslint-disable react/react-in-jsx-scope */
import { Header } from '../components/Header';
import { Issues } from '../components/Issues';
import { SearchContent } from '../components/Search';
import { User } from '../components/User';
import { css } from '../styles/theme/default';

const Wrapper = css({
	display: 'flex',
	flexDirection: 'column'
});

export function Home() {
	return (
		<main className={Wrapper()}>
			<Header>
				<User />
			</Header>
			<SearchContent />
			<Issues />
		</main>
	);
}
