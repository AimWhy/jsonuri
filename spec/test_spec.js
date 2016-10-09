'use strict'

const JsonUri = require('../dist/jsonuri.common.js')
const exampleData = function () {
  return {
    "id" : "1001",
    "name" : "Example Data"
  }
}


describe('JsonUri', () => {
  it('{}', () => {
    expect(JsonUri + '').toEqual('[object Object]')
  })
})

describe('get set', () => {
  it('get', () => {
    expect({}).toEqual('[object Object]')
  })
  //
  //it('[]', () => {
  //  expect(safeTrim([])).toEqual('')
  //})
  //
  //it('NaN', () => {
  //  expect(safeTrim(NaN)).toEqual('NaN')
  //})
  //
  //it('undefined', () => {
  //  expect(safeTrim(undefined)).toEqual('undefined')
  //})
  //
  //it('null', () => {
  //  expect(safeTrim(null)).toEqual('null')
  //})
  //
  //it('0', () => {
  //  expect(safeTrim(0)).toEqual('0')
  //})
  //
  //it('function', () => {
  //  let fun = () => {}
  //  let ret = safeTrim(fun)
  //  expect(ret).toEqual(String(fun))
  //})
})
