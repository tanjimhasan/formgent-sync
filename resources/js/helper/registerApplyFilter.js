import { applyFilters } from '@wordpress/hooks';

export function registerIsProActive() {
	return applyFilters( 'formgent_pro_status', false );
}

export function registerIsAdmin() {
	return applyFilters( 'formgent_is_admin', true );
}
