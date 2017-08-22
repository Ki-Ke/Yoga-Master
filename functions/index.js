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
        app.data.index = 0;
        app.ask(`Hi, Your yoga master here! To start your ${weekday()} lessons just say 'start lesson'`);
    }

    function startLesson() {

        let selectedData;
        let index = app.data.index;

        switch(weekday()) {
            case 'Monday':
                selectedData = data.monday[index];
                break;
            case 'Tuesday':
                selectedData = data.monday[index];
                break;
            case 'Wednesday':
                selectedData = data.monday[index];
                break;
            case 'Thursday':
                selectedData = data.monday[index];
                break;
            case 'Friday':
                selectedData = data.monday[index];
                break;
            case 'Saturday':
                selectedData = data.monday[index];
                break;
            case 'Sunday':
                selectedData = data.monday[index];
                break;
            default:
                selectedData = data.monday[index];
                break;
        }

        let prompt = SSML_SPEAK_START + selectedData.speech + SSML_SPEAK_END;
        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
            const cardView = app.buildRichResponse()
                .addSimpleResponse(prompt)
                .addBasicCard(app.buildBasicCard(selectedData.description)
                    .setSubtitle(selectedData.name)
                    .setTitle(selectedData));
                    //.setImage(appData.image, appData.name));
            app.data.index++;
            app.ask(cardView);
        } else {
            app.data.index++;
            app.ask(prompt);
        }
    }

    const actionMap = new Map();
    actionMap.set(WELCOME_INTENT, welcome);

    actionMap.set(START_LESSON_INTENT, startLesson);

    app.handleRequest(actionMap);
});