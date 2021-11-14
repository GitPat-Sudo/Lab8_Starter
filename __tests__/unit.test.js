// unit.test.js

const { test } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('626-323-2122 is a phone number', () => {
    // TODO
    var istrue=functions.isPhoneNumber('626-323-2122');
    expect(istrue).toBe(true);
  });

  test('626-323-2 is not a phone number', () => {
    // TODO
    var istrue=functions.isPhoneNumber('626-323-2');
    expect(istrue).toBe(false);
  });

  test('(626)-399-0222 is a phone number', () => {
    // TODO
    var istrue=functions.isPhoneNumber('(626)-399-0222');
    expect(istrue).toBe(true);
  });

  test('626323212221 is not a phone number', () => {
    // TODO
    var istrue=functions.isPhoneNumber('626323212221');
    expect(istrue).toBe(false);
  });

  test('patrickwang@gmail.com is a valid email', () => {
    // TODO
    var istrue=functions.isEmail('patrickwang@gmail.com');
    expect(istrue).toBe(true);
  });

  test('patrickwang.gmail.com is not a valid email', () => {
    // TODO
    var istrue=functions.isEmail('patrickwang.gmail.com');
    expect(istrue).toBe(false);
  });

  test('patrickw@nasaedu is not valid email', () => {
    // TODO
    var istrue=functions.isEmail('patrickw@nasaedu');
    expect(istrue).toBe(false);
  });

  test('pat@ucsd.edu is a valid email', () => {
    // TODO
    var istrue=functions.isEmail('patrickw@nasa.edu');
    expect(istrue).toBe(true);
  });


  test('patrickwnasedu is a strong password', () => {
    // TODO
    var istrue=functions.isStrongPassword('patrickwnasedu');
    expect(istrue).toBe(true);
  });

  test('patrickwnaseduaaaaaaaaaaa is not strong password', () => {
    // TODO
    var istrue=functions.isStrongPassword('patrickwnaseduaaaaaaaaaaa');
    expect(istrue).toBe(false);
  });

  test('pA_t_123a is a strong password', () => {
    // TODO
    var istrue=functions.isStrongPassword('pA_t_123a');
    expect(istrue).toBe(true);
  });

  test('1pA_t_123a is not a strong password', () => {
    // TODO
    var istrue=functions.isStrongPassword('1pA_t_123a');
    expect(istrue).toBe(false);
  });

  test('3/12/1112 is a date', () => {
    // TODO
    var istrue=functions.isDate('3/12/1112');
    expect(istrue).toBe(true);
  });

  test('3/121112 is not a date', () => {
    // TODO
    var istrue=functions.isDate('3/121112');
    expect(istrue).toBe(false);
  });

  test('03/22/9012 is a date', () => {
    // TODO
    var istrue=functions.isDate('03/22/9012');
    expect(istrue).toBe(true);
  });

  test('93.12.1112 is not a date', () => {
    // TODO
    var istrue=functions.isDate('93.12.1112');
    expect(istrue).toBe(false);
  });

  test('111111 is a hex color', () => {
    // TODO
    var istrue=functions.isHexColor('111111');
    expect(istrue).toBe(true);
  });

  test('1kdlsw1 is not a hex color', () => {
    // TODO
    var istrue=functions.isHexColor('1kdlsw1');
    expect(istrue).toBe(false);
  });

  test('e02020 is a hex color', () => {
    // TODO
    var istrue=functions.isHexColor('e02020');
    expect(istrue).toBe(true);
  });

  test('adada is not a hex color', () => {
    // TODO
    var istrue=functions.isHexColor('adada');
    expect(istrue).toBe(false);
  });










