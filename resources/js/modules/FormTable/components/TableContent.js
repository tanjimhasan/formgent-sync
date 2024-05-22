import { useSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import {Table} from '@newform/components';
import { formatDate } from '@newform/helper/utils';
export default function TableContent(){
    const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );
    const { forms } = FormReducer;

    const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

    const formTableColumns = applyFilters('newform_form_table_columns', [
        {
            title: '',
            className: 'newform-form-checkbox',
            render: (text, record) => (
                <div className="newform-titleBox">
                    <div className="newform-titlebox__content">
                        <div className="newform-titleBox-text">
                            <span className="helpgent-title"></span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Responses',
            className: 'newform-head-response',
            render: (text, record) => (
                <div className="helpgent-form-responses">
                    <a
                        //to={ `responses` }
                    >
                        { record.total_entries }
                        { record.total_unread_entries > 0 ? (
                            <div className="helpgent-badge helpgent-badge-danger helpgent-badge-circle helpgent-badge-small">
                                { record.total_unread_entries }
                            </div>
                        ) : (
                            ''
                        ) }
                    </a>
                </div>
            )
        },
        {
            title: 'Created By',
            className: 'newform-head-created-by',
            render: (text, record) => (
                <td className="helpgent-form-username">
                    { record.username }
                </td>
            )
        },
        {
            title: 'Updated',
            className: 'newform-head-updated-at',
            render: (text, record) => {
                const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="helpgent-form-date">
						{/* {  formatDate( 'en-US', date, dateFormatOptions ) } */}
					</div>
				);
            }
        }
    ]);

    console.log(forms);
    return(
        <Table
            columns={formTableColumns}
            dataSource={forms}
        />
    )
}