import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

/**
 * @controller Update Acronym
 * @route /api/acronyms/:id
 * @method PATCH
 * @description Update acronym
 * @params /:id - acronym id
 * @access Public
 */
export const updateAcronym = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Update acronym' });
})