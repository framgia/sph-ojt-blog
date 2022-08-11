import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const BlogContainer = () => {
	const navigate = useNavigate();

	const header = ['Title of the article'];
	const meta = ['August 11, 2022'];
	const description = [
		'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
	];
	const extra = (
		<a href='/' onClick={() => navigate('/')}>
			<Icon name='comment' />
			20 comments
		</a>
	);
	return (
		<Card
			centered
			fluid
			href='/posts/:slug'
			header={header}
			meta={meta}
			description={description}
			extra={extra}></Card>
	);
};
export default BlogContainer;
