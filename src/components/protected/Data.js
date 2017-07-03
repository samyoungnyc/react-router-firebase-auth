import React, { Component } from 'react'
import { ref, firebaseAuth } from '../../config/constants'

export function testingDataStuff () {
	var userRef = ref.child('users');
	var userInfoRef = userRef.child('info');
  console.log(ref);
}