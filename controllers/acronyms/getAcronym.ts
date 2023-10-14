import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma'

/**
 * @controller Get Acronym
 * @route /api/acronyms/:id
 * @method GET
 * @description Get all acronym
 * @params /:id - acronym id
 * @access Public
 */
export const getAcronym = asyncHandler(async (req: Request, res: Response) => {
  // get id from req params
  const { id } = req.params

  // check if acronym exists
  const acronym = await prisma.acronym.findUnique({
    where: {
      id,
    }
  }).catch((_) => { 
    // if acronym does not exist, throw error
    throw new Error(`Acronym with id \`${id}\` does not exist`)
  })
  
  // return acronym
  res.status(200).json({
    success: true,
    error: null,
    results: acronym,
  })
})