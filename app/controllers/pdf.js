// MODELS
const auditoriaMethods = require('../models/auditoriaMethods')
const auditoriaGlobal = require('../models/auditoriaGlobal')
const auditoriaInv = require('../models/auditoriaInv')
const deviceMonitor = require('../models/deviceMonitor')
const deviceRouter = require('../models/deviceRouter')
const devicePrinter = require('../models/devicePrinter')
const devicePc = require('../models/devicePc')
const deviceOthers = require('../models/deviceOthers')
const orden =  require('../models/orden')

const serviceOrder = require('../services/orden')
const serviceDevice = require('../services/devices')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const fs = require('fs')
const pdf = require('html-pdf')


const options = {
  format: 'A4',
  header: {
    height: "10mm",
  },
  footer: {
    height: "15mm",
    contents: {
      default: '<p style="color: #9c9c9c; text-align: center; margin-top: .5rem"> Bios </p>', // fallback value
    }
  }
}
/********************
 * Public functions *
 ********************/

exports.auditoriaMethods = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const data = await db.getItems(req, auditoriaMethods, query)
    res.render(`${__dirname}/../../templates/auditoriaMethods.ejs`,{data: data.docs}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/auditoriaMethods.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/auditoriaMethods.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.auditoriaGlobal = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const data = await db.getItems(req, auditoriaGlobal, query)
    // options.orientation = 'landscape'
    res.render(`${__dirname}/../../templates/auditoriaGlobal.ejs`,{data: data.docs}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/auditoriaGlobal.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/auditoriaGlobal.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
    options.orientation = 'portrait'
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.auditoriaInventory = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const data = await db.getItems(req, auditoriaInv, query)
    res.render(`${__dirname}/../../templates/auditoriaInv.ejs`,{data: data.docs}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/auditoriaInv.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/auditoriaInv.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.deviceMonit = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, deviceMonitor)
    res.render(`${__dirname}/../../templates/deviceMonitor.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/deviceMonitor.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/deviceMonitor.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.deviceRoute = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, deviceRouter)
    res.render(`${__dirname}/../../templates/deviceRouter.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/deviceRouter.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/deviceRouter.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.deviceRoute = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, deviceRouter)
    res.render(`${__dirname}/../../templates/deviceRouter.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/deviceRouter.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/deviceRouter.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.devicePrint = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, devicePrinter)
    res.render(`${__dirname}/../../templates/devicePrinter.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/devicePrinter.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/devicePrinter.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.devicePC = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, devicePc)
    res.render(`${__dirname}/../../templates/devicePc.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/devicePc.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/devicePc.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.deviceOther = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data = await serviceDevice.getItem(id, deviceOthers)
    res.render(`${__dirname}/../../templates/deviceOthers.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/deviceOthers.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/deviceOthers.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.orden = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const aggregation = db.getItemsOrdenByUser(orden, query, (req.user) ? req.user : {})
    const data = await db.getItemsAggregate(req, orden, aggregation)
    res.render(`${__dirname}/../../templates/ordenList.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/ordenList.pdf', function(err, resp) {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/ordenList.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.ordenId = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const data =  await serviceOrder.getItem(id, orden)
    console.log(data)
    res.render(`${__dirname}/../../templates/orden.ejs`,{data}, (err, html) => {
      pdf.create(html, options).toFile('../../public/pdf/orden.pdf', (err, resp) => {
        if (err) console.log(err)
        else {
          const file = fs.readFileSync('../../public/pdf/orden.pdf')
          res.header('content-type','application/pdf');
          res.send(file)
        }
      });
    })
  } catch (error) {
    utils.handleError(res, error)
  }
}
