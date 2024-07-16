export default function StarterContent() {
	const starterCardItem = [
		{
			icon: 'icon',
			title: 'Start from scratch',
			coming_soon: false,
			css_class: '',
			type: 'default',
		},
		{
			icon: 'icon',
			title: 'Use a template',
			coming_soon: false,
			css_class: 'formgent-starter-card--template',
			type: 'template',
		},
		{
			icon: 'icon',
			title: 'Create with AI',
			coming_soon: true,
			css_class: 'formgent-starter-card--ai',
			type: 'ai',
		},
	];

	return (
		<div className="formgent-starter-content">
			<div className="formgent-starter-content__info">
				<img src="" alt="" />
				<h2>You don't have any form</h2>
				<p>
					Create a new form from scratch or use a template to get
					started.
				</p>
			</div>
			<div className="formgent-starter-cards">
				{ starterCardItem.map( ( item ) => {
					<div
						className={ `formgent-starter-card ${ item.css_class }` }
					>
						<div className="formgent-starter-card__icon">
							{ item.icon }
						</div>
						<h2 className="formgent-starter-card__title">
							{ item.title }
						</h2>
						{ item.coming_soon && (
							<span className="formgent-badge formgent-badge--warning">
								Coming soon
							</span>
						) }
					</div>;
				} ) }
			</div>
		</div>
	);
}
