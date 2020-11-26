/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */
const _ = require('lodash')
const mongoose = require('mongoose')

exports.getItem = (id, model) =>
  new Promise((resolve, reject) => {
    try {
      const aggregate = [
        {
          $match: {
            $and: [{ _id: mongoose.Types.ObjectId(id) }]
          }
        },
        {
          $lookup: {
            from: 'ordens',
            let: { idDevice: '$_id' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ['$$idDevice', '$device._id'] }]
                  }
                }
              },
              {
                $lookup: {
                  from: 'users',
                  let: { idUser: '$customer' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [{ $eq: ['$$idUser', '$_id'] }]
                        }
                      }
                    },
                    {
                      $project: {
                        name: 1,
                        ci: 1,
                        email: 1,
                        phone: 1,
                        country: 1
                      }
                    }
                  ],
                  as: 'customer'
                }
              },
              {
                $lookup: {
                  from: 'users',
                  let: { idUser: '$tecnico' },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $and: [{ $eq: ['$$idUser', '$_id'] }]
                        }
                      }
                    },
                    {
                      $project: {
                        name: 1,
                        ci: 1,
                        email: 1,
                        phone: 1,
                        country: 1
                      }
                    }
                  ],
                  as: 'tecnico'
                }
              }
            ],
            as: 'orden'
          }
        }
      ]

      model.aggregate(aggregate, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(_.head(res))
      })
    } catch (e) {
      reject(e)
    }
  })
