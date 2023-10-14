import { Request, Response } from 'express'

/**
 * @controller Get Acronym
 * @route /api/acronyms/:id
 * @method GET
 * @description Get all acronym
 * @params /:id - acronym id
 * @access Public
 */
export const getAcronym = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get acronym' })
}