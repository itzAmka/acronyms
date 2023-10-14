import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';

/**
 * @controller Delete Acronym
 * @route /api/acronyms/:id
 * @method DELETE
 * @description Delete acronym
 * @params /:id - acronym id
 * @access Public
 */
export const deleteAcronym = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Delete acronym' })
})