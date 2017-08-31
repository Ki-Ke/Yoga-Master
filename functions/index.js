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
const firebase = require('firebase-admin');

firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: "https://yogamaster-89cde.firebaseio.com"
});
const db = firebase.database();

const weekday = require('weekday');

// Api.ai intents
const WELCOME_INTENT = 'input.welcome';
const START_LESSON_INTENT = 'input.startLesson';
const NEXT_LESSON_INTENT = 'input.nextLesson';
const NEXT_STEP = 'input.nextStep';
const MEDITATION = 'input.meditation';

// Speech constants
const HOSTING_URL = "https://yogamaster-89cde.firebaseapp.com";
const SSML_SPEAK_START = '<speak>';
const SSML_SPEAK_END = '</speak>';
const MEDITATION_AUDIO = HOSTING_URL + "/audio/meditation.mp3";

const AUDIO = '<audio src="' + MEDITATION_AUDIO + '">Playing nature sound</audio>';

exports.yogaMaster = functions.https.onRequest((request, response) => {
    const app = new App({request, response});

    function welcome() {
        app.data.index = 0;
        app.data.currentSpeechIndex = 0;
        app.ask(`Hi, Your Yoga Master here! To start your ${weekday()} lessons just say "start lesson" or say "start meditation" to start meditating`);
    }

    function startLesson() {

        let index = app.data.index;
        let fullDay = db.ref(`${weekday()}/`);
        let currentAsana = db.ref(`${weekday()}/${index}`);

        fullDay.once('value').then((day) => {
            currentAsana.once('value').then((snapshot) => {

                if (snapshot.exists()) {
                    const currentSpeechIndex = app.data.currentSpeechIndex;
                    const currentSpeech = db.ref(`${weekday()}/${index}/speech/${currentSpeechIndex}`);
                    currentSpeech.once('value').then((speechSnapshot) => {
                        const speech = speechSnapshot.val().value;
                        console.log(speechSnapshot.val().value);
                        console.log(currentSpeech);
                        if (!speech) {
                            if (snapshot.val().index >= day.numChildren()) {
                                app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                                app.data.index++;
                            } else {
                                app.data.index++;
                                app.ask('Great job! Shall we continue on to your next asana?');
                            }
                            return;
                        }
                        let prompt = SSML_SPEAK_START + speech + SSML_SPEAK_END;
                        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt)
                                .addBasicCard(app.buildBasicCard(snapshot.val().description)
                                    .setSubtitle(snapshot.val().name)
                                    .setTitle(snapshot.val().sanskritName)
                                    .setImage(snapshot.val().image, snapshot.val().name));
                            app.data.index++;
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        } else {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt);
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        }

                    });
                } else {
                    console.info(`Completed all lessons for today ${index}`);
                    app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                }

            });
        });
    }

    function nextLesson() {

        let index = app.data.index;
        let fullDay = db.ref(`${weekday()}/`);
        let currentAsana = db.ref(`${weekday()}/${index}`);

        fullDay.once('value').then((day) => {
            currentAsana.once('value').then((snapshot) => {

                if (snapshot.exists()) {
                    const currentSpeechIndex = app.data.currentSpeechIndex;
                    const currentSpeech = db.ref(`${weekday()}/${index}/speech/${currentSpeechIndex}`);
                    currentSpeech.once('value').then((speechSnapshot) => {
                        const speech = speechSnapshot.val().value;
                        console.log(speechSnapshot.val().value);
                        console.log(currentSpeech);
                        if (!speech) {
                            if (snapshot.val().index >= day.numChildren()) {
                                app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                                app.data.index++;
                            } else {
                                app.data.index++;
                                app.ask('Great job! Shall we continue on to your next asana?');
                            }
                            return;
                        }
                        let prompt = SSML_SPEAK_START + speech + SSML_SPEAK_END;
                        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt)
                                .addBasicCard(app.buildBasicCard(snapshot.val().description)
                                    .setSubtitle(snapshot.val().name)
                                    .setTitle(snapshot.val().sanskritName)
                                    .setImage(snapshot.val().image, snapshot.val().name));
                            app.data.index++;
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        } else {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt);
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        }

                    });
                } else {
                    console.info(`Completed all lessons for today ${index}`);
                    app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                }

            });
        });
    }

    function nextStep() {

        let index = app.data.index;
        let fullDay = db.ref(`${weekday()}/`);
        let currentAsana = db.ref(`${weekday()}/${index}`);

        fullDay.once('value').then((day) => {
            currentAsana.once('value').then((snapshot) => {

                if (snapshot.exists()) {
                    const currentSpeechIndex = app.data.currentSpeechIndex;
                    const currentSpeech = db.ref(`${weekday()}/${index}/speech/${currentSpeechIndex}`);
                    currentSpeech.once('value').then((speechSnapshot) => {
                        const speech = speechSnapshot.val().value;
                        console.log(speechSnapshot.val().value);
                        console.log(currentSpeech);
                        if (!speech) {
                            if (snapshot.val().index >= day.numChildren()) {
                                app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                                app.data.index++;
                            } else {
                                app.data.index++;
                                app.ask('Great job! Shall we continue on to your next asana?');
                            }
                            return;
                        }
                        let prompt = SSML_SPEAK_START + speech + SSML_SPEAK_END;
                        if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt)
                                .addBasicCard(app.buildBasicCard(snapshot.val().description)
                                    .setSubtitle(snapshot.val().name)
                                    .setTitle(snapshot.val().sanskritName)
                                    .setImage(snapshot.val().image, snapshot.val().name));
                            app.data.index++;
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        } else {
                            const cardView = app.buildRichResponse()
                                .addSimpleResponse(prompt);
                            cardView.addSimpleResponse(`When you are ready for the next step, just say "Next step"`);
                            app.data.currentSpeechIndex++;
                            app.tell(cardView);
                        }

                    });
                } else {
                    console.info(`Completed all lessons for today ${index}`);
                    app.tell(`Great job! You have completed all your ${weekday()}'s asanas. Have a great day!`);
                }

            });
        });

    }

    function meditation() {
        let prompt = SSML_SPEAK_START
            + `Ok, Lets start, close your eyes and relax.`
            + AUDIO
            + SSML_SPEAK_END;
        app.tell(prompt);
    }


    const actionMap = new Map();
    actionMap.set(WELCOME_INTENT, welcome);

    actionMap.set(START_LESSON_INTENT, startLesson);
    actionMap.set(NEXT_LESSON_INTENT, nextLesson);
    actionMap.set(NEXT_STEP, nextStep);
    actionMap.set(MEDITATION, meditation);

    app.handleRequest(actionMap);
});