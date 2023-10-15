import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma'

/**
 * @controller Delete Acronym
 * @route /api/acronym/:id
 * @method DELETE
 * @description Delete acronym
 * @params /:id - acronym id
 * @access Public
 */
export const deleteAcronym = asyncHandler(async (req: Request, res: Response) => {
  // get id from req params
  const { id } = req.params

  // check if acronym exists
  const acronymExists = await prisma.acronym.findUnique({
    where: {
      id,
    }
  })

  // if acronym does not exist, throw error
  if (!acronymExists) {
    throw new Error(`Acronym with id \`${id}\` does not exist`)
  }

  // delete acronym
  const deletedAcronym = await prisma.acronym.delete({
    where: {
      id,
    }
  }).catch((_) => { 
    // handle errors
    throw new Error(`Error while deleting acronym with id \`${id}\``)
  })

  // return deleted acronym
  res.status(200).json({
    success: true,
    error: null,
    results: deletedAcronym,
  })
})