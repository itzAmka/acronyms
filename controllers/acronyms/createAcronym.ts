import { Request, Response } from 'express'

/**
 * @controller Create Acronym
 * @route /api/acronyms
 * @method POST
 * @description Create acronym
 * @access Public
 */
export const createAcronym = async (req: Request, res: Response) => { 
  res.status(200).json({ message: 'Create acronym' })
}