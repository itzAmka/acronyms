import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';

/**
 * @controller Create Acronym
 * @route /api/acronyms
 * @method POST
 * @description Create acronym
 * @access Public
 */
export const createAcronym = asyncHandler(async (req: Request, res: Response) => { 
  res.status(200).json({ message: 'Create acronym' })
})