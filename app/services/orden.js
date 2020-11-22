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
            from: 'users',
            let: { idUser: '$customer' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ['$$idUser', '$_id'] }]
                  }
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
              }
            ],
            as: 'tecnico'
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
