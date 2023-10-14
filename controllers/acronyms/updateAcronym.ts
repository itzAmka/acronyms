import { Request, Response } from 'express';

/**
 * @controller Update Acronym
 * @route /api/acronyms/:id
 * @method PATCH
 * @description Update acronym
 * @params /:id - acronym id
 * @access Public
 */
export const updateAcronym = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Update acronym' });
}