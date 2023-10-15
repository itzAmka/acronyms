import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma';

/**
 * @controller Get Acronyms
 * @route /api/acronym
 * @method GET
 * @description Get all acronym
 * @query limit, page
 * @access Public
 */
export const getAcronyms = asyncHandler(async (req: Request, res: Response) => {
	// get query params
	let limit = req.query.limit ?? 10;
	let page = req.query.page ?? 1;
	const orderBy = req.query.orderBy ?? 'desc';

	if (orderBy !== 'asc' && orderBy !== 'desc') {
		res.status(400);
		throw new Error('Invalid `orderBy` value. It must be `asc` or `desc`. defaults to `desc`.');
	}

	// covert to number
	limit = Number(limit);
	page = Number(page);

	// handle invalid page and limit
	if (page < 1 || limit < 1) {
		res.status(400);
		throw new Error('Invalid `page` or `limit` value.');
	}

	// limit cannot be greater than 20
	if (limit > 20) {
		res.status(400);
		throw new Error('`limit` cannot be greater than 20.');
	}

	// calculate skip
	const skip = (page - 1) * limit;

	// get the total count
	const totalCount = await prisma.acronym.count();

	// calculate total page
	const totalPage = Math.ceil(totalCount / limit);

	// if page is greater than total page, throw error
	if (page > totalPage) {
		res.status(400);
		throw new Error(`You only have ${totalPage} pages. Please stay in the correct range.`);
	}

	// get all acronym from db
	const acronym = await prisma.acronym.findMany({
		skip,
		take: limit,
		orderBy: {
			id: orderBy
		}
	});

	res.status(200).json({
		success: true,
		error: null,
		results: {
			data: acronym,
			meta: {
				totalCount,
				limit,
				page,
				totalPage,
				orderBy
			}
		}
	});
});
