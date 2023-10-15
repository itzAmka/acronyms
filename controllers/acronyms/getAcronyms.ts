import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma';

/**
 * @controller Get Acronyms
 * @route /api/acronym
 * @method GET
 * @description Get all acronym
 * @access Public
 */
export const getAcronyms = asyncHandler(async (req: Request, res: Response) => {
	// get all acronym from db
	const acronym = await prisma.acronym.findMany();

	res.status(200).json({
		success: true,
		error: null,
		results: acronym
	});
});
