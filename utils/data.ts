export const endpoints = {
	getAllAcronyms: {
		path: '/api/acronym',
		method: 'GET',
		description: 'Get all acronyms',
		access: 'Public'
	},
	getAcronymById: {
		path: '/api/acronym/:id',
		method: 'GET',
		description: 'Get acronym by id',
		access: 'Public'
	},
	createAcronym: {
		path: '/api/acronym',
		method: 'POST',
		description: 'Create acronym',
		access: 'Public'
	},
	updateAcronym: {
		path: '/api/acronym/:id',
		method: 'PATCH',
		description: 'Update acronym',
		access: 'Public'
	},
	deleteAcronym: {
		path: '/api/acronym/:id',
		method: 'DELETE',
		description: 'Delete acronym',
		access: 'Public'
	}
};
