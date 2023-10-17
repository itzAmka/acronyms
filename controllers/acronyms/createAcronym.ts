import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma';

/**
 * @controller Create Acronym
 * @route /api/acronym
 * @method POST
 * @description Create acronym
 * @body { acronym: string, definition: string} - acronym and definition
 * @access Public
 */
export const createAcronym = asyncHandler(async (req: Request, res: Response) => {
	// get data from req body
	const { acronym, definition } = req.body;

	// validate data
	if (acronym === '' || acronym === undefined || definition === '' || definition === undefined) {
		res.status(400);
		throw new Error('Please provide `acronym` and `definition` to create acronym');
	}

	// check if acronym already exists
	const acronymExists = await prisma.acronym.findUnique({
		where: {
			acronym
		}
	});

	// if acronym exists, throw error
	if (acronymExists !== null) {
		res.status(400);
		throw new Error(`Acronym \`${acronymExists.acronym}\` already exists`);
	}

	// create acronym
	const newAcronym = await prisma.acronym.create({
		data: {
			acronym,
			definition
		}
	});

	res.status(201).json({
		success: true,
		error: null,
		results: {
			data: newAcronym
		}
	});
});
