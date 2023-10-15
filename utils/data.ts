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

export const pagination = {
	limit: {
		type: 'number',
		default: 10,
		description: 'Limit the number of results'
	},
	page: {
		type: 'number',
		default: 1,
		description: 'Page number'
	},
	orderBy: {
		type: 'string',
		default: 'desc',
		description: 'Order by `asc` or `desc`'
	}
};
