import { Request, Response } from 'express'

/**
 * @controller Get Acronyms
 * @route /api/acronyms
 * @method GET
 * @description Get all acronyms
 * @access Public
 */
export const getAcronyms = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get acronym by id' })
}