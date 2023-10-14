import { Request, Response } from 'express'

/**
 * @controller Delete Acronym
 * @route /api/acronyms/:id
 * @method DELETE
 * @description Delete acronym
 * @params /:id - acronym id
 * @access Public
 */
export const deleteAcronym = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Delete acronym' })
}