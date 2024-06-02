import { useState, useEffect } from '@wordpress/element';
// import usePostMutation from '@formgent/hooks/usePostMutation';
import getPercentageValue from '@formgent/helper/getPercentage';
// import handleCreateForm from '@formgent/helper/handleCreateForm';
// import ProgressBar from '@formgent/components/ProgressBar';
import { ElementPreparationStyle } from './style';
// import { PreMadeTemplatesApi } from '@formgent/constants';
import { __ } from '@wordpress/i18n';

export default function CreatePopupElementPreparation( props ) {
	const {
		formData,
		createFormMutation,
		setServerErrors,
		navigate,
		queryClient,
		moduleState,
		setModuleState,
		baseLinkRoute,
	} = props;
	const [ importSuccessCount, setImportSuccessCount ] = useState( 0 );
	const [ importUnSuccessCount, setImportUnSuccessCount ] = useState( 0 );
	const [ importPercentage, setImportPercentage ] = useState( 0 );
	const [ pictureOptionCount, setPictureOptionCount ] = useState( 0 );
	const { templateElements, selectedTemplate } = moduleState;

	// const {
	// 	mutateAsync: importMediaMutation,
	// 	isLoading: isImportingMediaLoading,
	// } = usePostMutation( `/formgent/form/media` );

	useEffect( () => {
		if ( templateElements?.elements?.length > 0 ) {
			setModuleState( {
				...moduleState,
				isImportingAttachment: true,
			} );

			/**
			 * Count import
			 */
			fetch( PreMadeTemplatesApi + '/import/' + selectedTemplate.id );

			const elements = templateElements?.elements;
			let unSuccessCount = 0;
			let successCount = 0;
			elements.map( async ( item, index ) => {
				if ( item?.media?.url ) {
					const mediaData = {
						url: item.media.url,
					};

					try {
						const importMediaResponse =
							await importMediaMutation( mediaData );

						if ( importMediaResponse?.data?.status === 201 ) {
							elements[ index ].media.url =
								importMediaResponse.url;
							successCount = successCount + 1;
							setImportSuccessCount( successCount );
						} else {
							elements[ index ].media.url = null;
							unSuccessCount = unSuccessCount + 1;
							setImportUnSuccessCount( unSuccessCount );
						}
					} catch ( error ) {
						elements[ index ].media.url = null;
						unSuccessCount = unSuccessCount + 1;
						setImportUnSuccessCount( unSuccessCount );
					}
				} else {
					unSuccessCount = unSuccessCount + 1;
					setImportUnSuccessCount( unSuccessCount );
				}
				if ( item?.element_type === 'picture_select' ) {
					if ( item?.controls?.general?.options?.length > 0 ) {
						setPictureOptionCount(
							item?.controls?.general?.options?.length
						);
						item?.controls?.general?.options.map(
							async ( option, index ) => {
								if ( option?.url ) {
									const mediaData = {
										url: option?.url,
									};

									try {
										const importMediaResponse =
											await importMediaMutation(
												mediaData
											);
										if (
											importMediaResponse?.data
												?.status === 201
										) {
											item.controls.general.options[
												index
											].url = importMediaResponse?.url;
											successCount = successCount + 1;
											setImportSuccessCount(
												successCount
											);
										} else {
											item.controls.general.options[
												index
											].url = null;
											unSuccessCount = unSuccessCount + 1;
											setImportUnSuccessCount(
												unSuccessCount
											);
										}
									} catch ( error ) {
										item.controls.general.options[
											index
										].url = null;
										unSuccessCount = unSuccessCount + 1;
										setImportUnSuccessCount(
											unSuccessCount
										);
									}
								} else {
									unSuccessCount = unSuccessCount + 1;
									setImportUnSuccessCount( unSuccessCount );
								}
							}
						);
					}
				}
			} );
		}
	}, [ templateElements?.elements ] );

	useEffect( () => {
		const progressPercentage = getPercentageValue(
			importSuccessCount + importUnSuccessCount,
			templateElements?.elements?.length + pictureOptionCount
		);
		const formContent = JSON.stringify( {
			elements: templateElements.elements,
			global: templateElements.global,
		} );
		if ( parseInt( progressPercentage ) === 100 ) {
			// handleCreateForm(
			// 	formData,
			// 	createFormMutation,
			// 	setServerErrors,
			// 	navigate,
			// 	queryClient,
			// 	formContent,
			// 	baseLinkRoute
			// );
		}
		setImportPercentage( progressPercentage );
	}, [ importSuccessCount, importUnSuccessCount ] );

	return (
		<ElementPreparationStyle>
			<h4 className="formgent-import-attachment__title">
				{ __( 'Import attachment progress', 'formgent' ) }
			</h4>
			<div className="formgent-import-attachment__progress">
				<ProgressBar
					type="success"
					currentValue={ importPercentage }
					contentFlow="horizontal"
				/>
				<span className="formgent-import-attachment__percentage">
					{ Math.floor( importPercentage ) }%
				</span>
			</div>
		</ElementPreparationStyle>
	);
}
