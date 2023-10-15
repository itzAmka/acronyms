import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { prisma } from '../../config/prisma'

/**
 * @controller Update Acronym
 * @route /api/acronym/:id
 * @method PATCH
 * @description Update acronym
 * @params /:id - acronym id
 * @body { acronym: string, definition: string} - acronym and definition
 * @access Public
 */
export const updateAcronym = asyncHandler(async (req: Request, res: Response) => {
  // get id from req params
  const { id } = req.params

  // get data from req body
  const { acronym, definition } = req.body

  // check if acronym exists
  const foundAcronym = await prisma.acronym.findUnique({
    where: {
      id,
    }
  }).catch((_) => { 
    // if acronym does not exist, throw error
    throw new Error(`Acronym with id \`${id}\` does not exist`)
  })

  // if the current acronym is same as the new acronym and the new acronym is not empty, skip the check
  if (foundAcronym?.acronym !== acronym && acronym) { 
    // check if the new acronym already exists in the database
    const acronymExists = await prisma.acronym.findUnique({
      where: {
        acronym,
      }
    }).catch((_) => { 
      // handle errors
      throw new Error(`Error while checking if acronym \`${acronym}\` exists`)
    })

    // if acronym exists, throw error
    if (acronymExists) {
      throw new Error(`Acronym \`${acronymExists.acronym}\` already exists and has id \`${acronymExists.id}\``)
    }
  }

  // update acronym
  const updatedAcronym = await prisma.acronym.update({
    where: {
      id,
    },
    data: {
      acronym,
      definition,
    }
  })

  // return updated acronym
  res.status(200).json({
    success: true,
    error: null,
    results: updatedAcronym,
  })
})