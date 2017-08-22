/**
 Copyright 2017 KiKe. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 **/
'use strict';

const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');
const weekday = require('weekday');
const data = require('./data');

// Api.ai intents
const WELCOME_INTENT = 'input.welcome';
const START_LESSON_INTENT = 'input.startLesson';

// Speech constants
const SSML_SPEAK_START = '<speak>';
const SSML_SPEAK_END = '</speak>';

exports.yogaMaster = functions.https.onRequest((request, response) => {
    const app = new App({request, response});

    function welcome() {
        app.ask(`Hi, Your yoga master here! To start your ${weekday()} lessons just say 'start lesson'`);
    }

    function startLesson() {
        app.tell(SSML_SPEAK_START + data.data[1].description + SSML_SPEAK_END);
    }

    const actionMap = new Map();
    actionMap.set(WELCOME_INTENT, welcome);

    actionMap.set(START_LESSON_INTENT, startLesson);

    app.handleRequest(actionMap);
});